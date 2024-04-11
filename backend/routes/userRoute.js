import express from "express";
import { User } from "../models/userModel.js";
import { Vocabulary } from "../models/vocabularyModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  try {
    const vocab = await User.find({});

    return res.status(200).json({
      count: vocab.length,
      data: vocab,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for get One user from database by Id
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    console.log(user);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { name, email, password, level } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      level,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update User
router.put("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, level } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's information
    user.name = name || user.name;
    user.email = email || user.email;
    user.level = level || user.level;

    // Save the updated user
    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//add Word to user
router.get("/add_word/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    //const { name, email, level } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get Vocabulary Word
    // sample word
    const vocab = await Vocabulary.find({"difficulty_level" : user.level});
    var word = vocab[Math.floor(Math.random() * (vocab.length-1 - 0 + 1))];
    var inc = true;
    while(inc){
      inc = false;
      for(var i = 0; i < user.vocabulary_received.length; i++){
        if(user.vocabulary_received[i].russian_word == word.russian_word){
          inc = true;
          word = vocab[Math.floor(Math.random() * (vocab.length-1 - 0 + 1))];
          i = user.vocabulary_received.length;
        }
      }
    }
    // Save the updated user
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { vocabulary_received : { 
        russian_word : word.russian_word,
        english_word : word.english_word,
        example_sentence : word.example_sentence,
        difficulty_level : word.difficulty_level
      } } }
   );
    //const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/add/all_users", async (req, res) => {
  try {
    const all_users = await User.find({});
    var updated = 0;
    
    for(var j = 0; j < all_users.length; j++){
      var user = all_users[j]
      const vocab = await Vocabulary.find({"difficulty_level" : user.level});
      var word = vocab[Math.floor(Math.random() * (vocab.length-1 - 0 + 1))];
      var inc = true;
      while(inc){
        inc = false;
        for(var i = 0; i < user.vocabulary_received.length; i++){
          if(user.vocabulary_received[i].russian_word == word.russian_word){
            inc = true;
            word = vocab[Math.floor(Math.random() * (vocab.length-1 - 0 + 1))];
            i = user.vocabulary_received.length;
          }
        }
      }
      // Save the updated user
      const updatedUser = await User.updateOne(
        { _id: user._id },
        { $push: { vocabulary_received : { 
          russian_word : word.russian_word,
          english_word : word.english_word,
          example_sentence : word.example_sentence,
          difficulty_level : word.difficulty_level
        } } });
      updated ++;
    }

    return res.status(200).json({
      count: updated
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
