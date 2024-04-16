import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import vocabularyRoute from "./routes/vocabularyRoute.js";
import userRoute from "./routes/userRoute.js";
import emailRoute from "./routes/emailRoute.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "./models/userModel.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: allow all origins with Default of cors
app.use(cors());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to MERN");
});

app.use("/books", booksRoute);
app.use("/api/vocabulary", vocabularyRoute);
app.use("/api/user", userRoute);
app.use("/api/email", emailRoute);

// User login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign({ userId: user._id }, "secret-key");
  res.json({ token });
});

// Middleware to authenticate token
// Now I don't really use it
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(token, "secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
}

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
