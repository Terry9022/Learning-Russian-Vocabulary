import mongoose from "mongoose";

const vocabularySchema = new mongoose.Schema({
  russian_word: {
    type: String,
    required: true,
  },
  english_word: {
    type: String,
    required: true,
  },
  part_of_speech: {
    type: String,
    required: true,
  },
  example_sentence: {
    type: String,
    required: true,
  },
  difficulty_level: {
    type: String,
    required: true,
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: Number,
      require: true,
    },
    level: {
      type: String,
      required: true,
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

export const User = mongoose.model("User", userSchema);
