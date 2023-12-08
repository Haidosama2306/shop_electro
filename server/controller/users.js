import { UserModel } from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {

        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const findProfile = async (req, res) => {
    try {
        const users = await UserModel.find({ _id: req.body._id });
    
        res.status(200).json(users);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
      }
}
