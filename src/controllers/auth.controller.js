import { User } from "../models";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { userSchema } from "../libs/schema.validator";
import createError from "http-errors";
import { signAccessToken } from "../helpers/signAccessToken";

export const login = async (req, res, next) => {
  try {
    const result = await userSchema.validateAsync(req.body);

    const userFound = await User.findOne({ email: result.email });

    if (!userFound) throw createError.Unauthorized("The user does not exists");

    const isMatch = await userFound.validPassword(result.password);

    if (!isMatch) throw createError.Unauthorized("Invalid Password");

    const token = await signAccessToken(userFound.id);

    res.json({ token });
  } catch (error) {
    if (error.isJoi) error.status = 400;
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const result = await userSchema.validateAsync(req.body);

    const userFound = await User.findOne({ email: result.email });

    if (userFound) throw createError.Conflict("The user already exists");

    const user = new User({ email: result.email, password: result.password });
    user.password = await user.generateHash(user.password);

    const userSaved = await user.save();

    const token = await signAccessToken(userSaved.id);

    res.json({ token });
  } catch (error) {
    if (error.isJoi) error.status = 400;
    next(error);
  }
};

export const profile = async (req, res) => {
  const user = await User.findOne({ _id: req.userId }).select("-password");

  if (!user) return res.status(401).json({ message: "User not found" });

  res.json(user);
};
