import { User } from "../models";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email: email });

  if (!userFound) return res.status(401).json({ message: "User not found" });

  const isMatch = await userFound.validPassword(password);

  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  jwt.sign({ id: userFound._id }, JWT_SECRET, (err, token) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ token });
    }
  });
};

export const register = async (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email, password });
  user.password = await user.generateHash(user.password);

  const userFound = await User.findOne({ email: email });

  if (userFound) {
    res.statusMessage = "User already exists";
    return res.status(400).json({ message: "User already exists" });
  }

  const userSaved = await user.save();

  jwt.sign({ id: userSaved._id }, JWT_SECRET, (err, token) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ token });
    }
  });
};

export const profile = async (req, res) => {
  const user = await User.findOne({ _id: req.userId }).select('-password');

  if (!user) return res.status(401).json({ message: "User not found" });

  res.json(user);
};
