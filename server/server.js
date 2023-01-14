import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mymother123*2332*",
  database: "CaptureStudents",
});

const app = express();
app.use(express.json());
app.use(cors());
const newUser = [];
app.get("/register", (req, res) => {
  res.send(newUser);
});

app.post("/login", async (req, res) => {
  res.send("somethng in the login page");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      password: hashedPassword,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth,
      phoneNumber: req.body.phoneNumber,
      state: req.body.state,
    };
    newUser.push(user);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000);
