"use strict";
import * as Yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .max(20, "name should not exceed 20 characters")
    .required("name is required *"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("email is required *"),
  password: Yup.string()
    .min(8)
    .matches(passwordRules, { message: "please create a stronger password" })
    .required("password is required *"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("please confirm your password *"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("email is required *"),
  password: Yup.string()
    .min(8)
    .matches(passwordRules, { message: "please create a stronger password" })
    .required("password is required *"),
});
