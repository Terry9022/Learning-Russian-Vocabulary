import express from "express";
import { User } from "../models/userModel.js";

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
  
  // Route for get One user from database by 
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const vocab = await User.find(id);
  
      return res.status(200).json(vocab);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

 /* router.get( =>{

  });*/

  export default router;

