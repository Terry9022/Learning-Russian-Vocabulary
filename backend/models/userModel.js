import mongoose from "mongoose";

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
            }
        }
    ]
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);