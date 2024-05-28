import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const User = model("Users", userSchema);

export {User};