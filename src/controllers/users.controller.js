import User from "../models/User";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error)
  }
};

export const getUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const userFound = await User.findById(id);
    if (!userFound) return res.sendStatus(404);
    res.json(userFound);
  } catch (error) {
    next(error);
  }
};