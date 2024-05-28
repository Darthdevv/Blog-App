import path from "path";
import fs from "fs";
import User from "../models/user.model.js";
import appError from "../utilities/appError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

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
    if (!req.files.avatar) {
      return next(new appError("Please choose an image.", 422));
    }

    //find user from database
    const user = await User.findById(req.user.id);

    //delete user avatar if it exists
    if (user.avatar) {
      fs.unlink(path.join(__dirname, '..', 'uploads', user.avatar), () => {
        if (err) {
          return next(new appError(err))
        }
      })
    }

    const { avatar } = req.files;

    //check file size
    if (avatar.size > 500000) {
      return next(new appError("Profile picture is too big, should be less than 500b", 422))
    }

    let fileName;
    fileName = avatar.name;
    let splittedFileName = fileName.split('.');
    let newFileName = splittedFileName[0] + uuidv4() + '.' + splittedFileName[splittedFileName.length - 1];
    avatar.mv(path.join(__dirname, '..', 'uploads', newFileName),  async (err) => {
      if (err) {
        return next(new appError(err))
      }

      const updatedAvatar = await User.findByIdAndUpdate(req.user.id, { avatar: newFileName }, { new: true });

      if (!updatedAvatar) {
        return next(new appError("Avatar couldn't be changed.", 422));
      }

      res.status(200).json(updatedAvatar);
    })


  } catch (error) {
    return next(new appError(error));
  }
};

export const editUser = (req, res) => {
  res.status(200).json("the user has been updated");
};
