import path from "path";
import fs from "fs";
import User from "../models/user.model.js";
import appError from "../utilities/appError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { __dirname } from "../server.js";


export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password) {
      return next(new appError("Fill in all fields.", 422));
    }

    const newEmail = email.toLowerCase();

    const emailExists = await User.findOne({ email: newEmail });

    if (emailExists) {
      return next(new appError("Email already exists", 422));
    }

    if (password.trim().length < 6) {
      return next(new appError("Password must be at least 6 characters"), 422);
    }

    if (password != password2) {
      return next(new appError("Passwords do not match.", 422));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPassword,
    });

    res.status(201).json(`New user ${newUser.email} is registered`);
  } catch (error) {
    return next(new appError("User Registration failed", 422));
  }
};


export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new appError("Fill in all fields.", 422));
    }

    const newEmail = email.toLowerCase();

    const user = await User.findOne({ email: newEmail });

    if (!user) {
      return next(new appError("Invalid credentials.", 422));
    }

    const comparePasswords = bcrypt.compare(password, user.password);

    if (!comparePasswords) {
      return next(new appError("Invalid credentials.", 422));
    }

    const { _id: id, name } = user;

    const token = jwt.sign({ id, name }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.status(200).json({ token, id, name });
  } catch (error) {
    return next(
      new appError("Login failed, Please check your credentials.", 422)
    );
  }
};


export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json(users);
  } catch (error) {
    return next(new appError(error));
  }
};


export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return next(new appError("User not found.", 404));
    }

    res.status(200).json(user);
  } catch (error) {
    return next(new appError(error));
  }
};


export const changeAvatar = async (req, res, next) => {
  try {
    if (!req.files || !req.files.avatar) {
      return next(new appError("Please choose an image.", 422));
    }

    const user = await User.findById(req.user.id);

    if (user && user.avatar) {
      const oldAvatarPath = path.join(__dirname, "uploads", user.avatar);
      try {
        if (fs.existsSync(oldAvatarPath)) {
          await fs.promises.unlink(oldAvatarPath);
        }
      } catch (err) {
        return next(new appError("Failed to delete old avatar.", 500));
      }
    }

    const avatar = req.files.avatar;

    if (avatar.size > 500000) {
      // Limit to 500 KB
      return next(
        new appError(
          "Profile picture is too big, should be less than 500kb",
          422
        )
      );
    }

    const uploadsDir = path.join(__dirname, "uploads");
    try {
      await fs.promises.mkdir(uploadsDir, { recursive: true });
    } catch (err) {
      return next(new appError("Failed to create directory for uploads.", 500));
    }

    const extension = avatar.name.split(".").pop();
    const newFileName = `${uuidv4()}.${extension}`;
    const newAvatarPath = path.join(__dirname, "uploads", newFileName);

    avatar.mv(newAvatarPath, async (err) => {
      if (err) {
        return next(new appError("Error saving file.", 500));
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        { avatar: newFileName },
        { new: true }
      );

      if (!updatedUser) {
        return next(new appError("Avatar couldn't be changed.", 422));
      }

      res.status(200).json(updatedUser);
    });
  } catch (error) {
    return next(new appError("Internal server error.", 500));
  }
};


export const editUser = async (req, res, next) => {
  try {
    const { name, email, currentPassword, newPassword, confirmNewPassword } = req.body;

    if (!name || !email || !currentPassword || !newPassword) {
      return next(new appError("Fill in all fields.", 422));
    }

    //get user from database
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(new appError("User not found.", 403));
    }

    //make sure that the email does not already exist
    const emailExists = await User.findOne({ email });

    if (emailExists && emailExists._id != req.user.id) {
      return next(new appError("Email already exists.", 422));
    }
    //compare current password to database password
    const validateUserPassword = await bcrypt.compare(currentPassword, user.password);
    if (!validateUserPassword) {
      return next(new appError("Invalid current password.", 422));
    }

    //compare new passwords
    if (newPassword != confirmNewPassword) {
      return next(new appError("New Passwords do not match.", 422));
    }

    //hash new password
    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);

    //update user info on database
    const updatedUser = await User.findByIdAndUpdate(req.user.id, { name, email, password: newHashedPassword }, { new: true });

    res.status(200).send(updatedUser);

  } catch (error) {
    return next(new appError(error));
  }
};
