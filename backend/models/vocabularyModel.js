import mongoose from "mongoose";

const vocabularySchema = mongoose.Schema(
  {
    russian_word: {
      type: String,
      require: true,
    },
    english_word: {
      type: String,
      require: true,
    },
    part_of_speech: {
      type: String,
      require: true,
    },
    example_sentence: {
        type: String,
        require: true,
    },
    difficulty_level: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Vocabulary = mongoose.model("Vocabulary", vocabularySchema);