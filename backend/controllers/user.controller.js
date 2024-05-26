import User from "../models/user.model.js";
import appError from '../utilities/appError.js'

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, paassword2 } = req.body;
    if (!name || !email || !password) {
      return next( new appError('Fill in all fields.', 422))
    }

    const newEmail = email.toLowerCase();

    const emailExists = await User.findOne({ email: newEmail });

    if (emailExists) {
      return next(new appError('Email already exists', 422));
    }

    if ((password.trim()).length < 6) {
      return next(new appError('Password must be at least 6 characters'), 422);
    }
    
  } catch (error) {
    return next(new appError('User Registration failed', 422));
  }
}

export const loginUser = (req, res) => {
  res.status(200).json("the user has logged in successfully");
};

export const getUsers = (req, res) => {
  res.status(200).json("these are the users");
};

export const getUser = (req, res) => {
  res.status(200).json("this is the user");
};

export const changeAvatar = (req, res) => {
  res.status(200).json("avatar has been changed");
};

export const editUser = (req, res) => {
  res.status(200).json("the user has been updated");
};