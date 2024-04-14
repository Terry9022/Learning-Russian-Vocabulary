const express = require("express");
const nodemailer = require("nodemailer");
const User = require("./models/User");
const Vocabulary = require("./models/Vocabulary");

const router = express.Router();

// Create a transporter using your email service provider
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

router.get("/send-daily-words", async (req, res) => {
  try {
    // Get all users
    const users = await User.find();

    // Iterate over each user
    for (const user of users) {
      // Get a random vocabulary word based on the user's level
      const vocabularyWord = await Vocabulary.aggregate([
        { $match: { difficulty_level: user.level } },
        { $sample: { size: 1 } },
      ]);

      // Compose the email message
      const mailOptions = {
        from: "your-email@gmail.com",
        to: user.email,
        subject: "Daily Russian Vocabulary",
        html: `
          <h1>Today's Russian Vocabulary Word</h1>
          <p>Russian Word: ${vocabularyWord[0].russian_word}</p>
          <p>English Translation: ${vocabularyWord[0].english_word}</p>
          <p>Example Sentence: ${vocabularyWord[0].example_sentence}</p>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
    }

    res
      .status(200)
      .json({ message: "Daily vocabulary emails sent successfully" });
  } catch (error) {
    console.error("Error sending daily vocabulary emails:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
