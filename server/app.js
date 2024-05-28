import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { User } from "./models/user.js";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*"));

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    res.status(200).json("user logged in!!");
  } else {
    res.status(400).json("User notexists!!");
  }
});

app.post("/register", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const user = await User.findOne({ email });

  if (user) res.status(400).json("User exists!!");
  else {
    try {
        
      const newUser = new User({ firstName,lastName,email, password });
      await newUser.save();
      res.status(201).json("user created!!");
    } catch (error) {
      console.error(error);
      res.json("Error creating user");
    }
  }
});


export {app};
