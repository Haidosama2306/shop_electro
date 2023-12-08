import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        maxlength: 150,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String
    }
    //Created_at , Updated_at
}, { timestamps: true} 
);

export const UserModel = mongoose.model('Users', schema);