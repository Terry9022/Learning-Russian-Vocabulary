import express from "express";
import { Vocabulary } from "../models/vocabularyModel.js";
import request from "request"; 


const router = express.Router();


// Route for get All vocabulary from database
router.get("/", async (req, res) => {
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
  
  // Route for get One vocabulary from database by id/word
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const vocab = await Vocabulary.find(id);
  
      return res.status(200).json(vocab);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  router.get("/level/:level", async (req, res) => {
    try {
      const { level } = req.params;
      console.log(level);
      const query = { runtime: { "level": level } };
      const vocab = await Vocabulary.find({"difficulty_level" : level});
  
      return res.status(200).json(vocab);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  // find vocabulary word based on english translation
  router.get("/english/:english", async (req, res) => {
    try {
      const { english } = req.params;
      //const vocab = await Vocabulary.find({"russian_word" : russian});
      const vocab = await Vocabulary.findOne({"english_word" : {$regex : english }});
  
      return res.status(200).json(vocab);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

  // add sentences to all words (no longer needed)
  /*router.get("/sentences/:sentences", async(req,res) => {
    
    const vocab = await Vocabulary.find({});
    //console.log(vocab);
    var updates = 0;
    for(var i = 0; i < vocab.length; i++){

      if(vocab[i].example_sentence == ""){
        var english = vocab[i].english_word.split(';');

        english = english[0]
        english.substring(1);
        console.log(english);
        var myquery = { _id : vocab[i]._id };
        var newvalues = { example_sentence : "https://dictionary.cambridge.org/us/dictionary/english-russian/" + english};
        const result = await Vocabulary.updateOne(myquery, newvalues);
        updates++;
        console.log(result);

       
      }
    }
    return res.status(200).json({updates : updates});
  });*/

  export default router;
