import mongoose from "mongoose";

const vocabularySchema = new mongoose.Schema({
  russian_word: {
    type: String,
  },
  english_word: {
    type: String,
  },
  part_of_speech: {
    type: String,
  },
  example_sentence: {
    type: String,
  },
  difficulty_level: {
    type: String,
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    level: {
      type: String,
      required: false,
    },
    vocabulary_received: [
      {
        vocabulary: vocabularySchema,
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema, "users");
