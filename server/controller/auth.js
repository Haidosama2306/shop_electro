import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import validate from "validator";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log('req.body: ',req.body);
    const validator = [];
    if (validate.isEmpty(username)) {
      validator.push({ username: "Vui lòng không bỏ trống username" });
    }
    if (validate.isEmpty(password)) {
      validator.push({ password: "Vui lòng không bỏ trống password" });
    }
    if (validator.length > 0) {
      return res.status(400).json({ err: validator });
    }

    const user = await UserModel.findOne({ username: username });
    if (!user) {
      return res.status(400).json({ err: "Tài khoản hoặc mật khẩu sai!" });
    } else {
      bcrypt.compare(password, user.password)
      .then((isMatch) => {
        if (isMatch) {
          const payload = { id: user._id, username: user.username };

          jwt.sign(payload, "abc-xyz", { expiresIn: 7200 }, (err, token) => {
            if (err) throw err;
            return res.json({ success: true, token: token, user: user._id });
          });
        } else {
          return res
            .status(400)
            .json({ err: "Tài khoản hoặc mật khẩu không chính xác!" });
        }
      });
    }
  } catch (error) {
    console.error("Error in Login function", error);
    return res.status(500).json({ errr: "Internal Server Error" });
  }
};

export const register = async (req, res) => {
    const { username, password } = req.body;
    const validator = []

    if (validate.isEmpty(username)) {
        validator.push({username: 'Vui lòng không bỏ trống username'})
    }else if(!validate.isLength(username,{min: 5, max:32})){
        validator.push({username:'Vui lòng tạo username từ 5 đến 32 kí tự'})
    }else if (/\s/.test(username)) {
      validator.push({ username: 'Username không được chứa khoảng trắng' });
    }

    if(validate.isEmpty(password)) {
        validator.push({password: 'Vui lòng không bỏ trống password'})
    }else if(!validate.isLength(password,{min: 5, max:32})) {
        validator.push({password:'Vui lòng tạo password từ 5 đến 32 kí tự'})
    }

    const user = await UserModel.findOne({ username: username });

    if (user) {
        validator.push({ username: 'Username đã tồn tại!' });
    }

    if (validator.length > 0) {
        return res.status(400).json({err: validator})
    }

    const newUser = new UserModel({
        username,
        password,
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser.id = Math.random();

            try {
                const savedUser = await newUser.save();
                const payload = { id: savedUser._id, username: savedUser.username };

                jwt.sign(payload, 'abc-xyz', { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;

                    return res.json({ success: true, token: token, user: savedUser._id });
                })
                
            } catch (error) {
                console.error('Failed to save user to database', err);
                return res.status(500).json({ err: 'Internal Server Error'+ Math.random() });
            }
        })
    })
}

export const checkLogin =  (req, res)=>{
  try {
    return res.status(200).json(true) 
  } catch (error) {
    return  res.status(401).json(false) 
  }
}
