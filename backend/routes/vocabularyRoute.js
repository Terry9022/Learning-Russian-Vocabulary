import express from "express";
import { Vocabulary } from "../models/vocabularyModel.js";

const router = express.Router();

// Route for get All vocabulary from database
router.get("/api/vocabulary", async (req, res) => {
    try {
      const vocab = await Vocabulary.find({});
  
      return res.status(200).json({
        count: vocab.length,
        data: vocab,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  // Route for get One Books from database by id
  router.get("/api/vocabulary/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const vocab = await Vocabulary.findById(id);
  
      return res.status(200).json(vocab);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  router.get("/api/vocabulary/level/:level", async (req, res) => {
    try {
      const { level } = req.params;
      const query = { runtime: { $eq: level } };
      const vocab = await Vocabulary.find(query);
  
      return res.status(200).json(vocab);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });