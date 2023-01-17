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

app.get("/register", (req, res) => {
  res.send();
});

app.post("/register", async (req, res) => {
  db.query("SELECT email FROM studentInfor", async (err, result) => {
    if (err) throw err;
    const found = result.find((email) => email.email === req.body.email);
    if (found !== undefined) {
      res.send("User exist");
    } else {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
          firstName: req.body.firstName,
          secondName: req.body.secondName,
          email: req.body.email,
          password: hashedPassword,
          dateOfBirth: req.body.dateOfBirth,
          phoneNumber: req.body.phoneNumber,
          state: req.body.state,
        };

        const addUser = "INSERT INTO studentInfor VALUES(null,?,?,?,?,?,?,?)";

        db.query(addUser, [
          user.firstName,
          user.secondName,
          user.password,
          user.email,
          user.dateOfBirth,
          user.phoneNumber,
          user.state,
        ]);
      } catch (error) {
        console.log(error);
      }
      res.send("user created successfully");
    }
  });
});

app.listen(3000);
