import { FaPen } from "react-icons/fa";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config.js";

const QuizPage = () => {
  const [vocabularies, setVocabularies] = useState([]);
  const [quizCount, setQuizCount] = useState(1);
  const [quizQuestion, setQuizQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(`${API_URL}/api/user/${userId}`);
        const userData = response.data;
        setVocabularies(userData.vocabulary_received);
      } catch (error) {
        console.error(error);
        alert("Error fetching user profile");
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const startQuiz = () => {
      if (vocabularies.length > 0) {
        const randomIndex = Math.floor(Math.random() * vocabularies.length);
        const newQuizQuestion = vocabularies[randomIndex].russian_word;
        const newCorrectAnswer = vocabularies[randomIndex].english_word;
        const newOptions = generateOptions(newCorrectAnswer);

        setQuizQuestion(newQuizQuestion);
        setCorrectAnswer(newCorrectAnswer);
        setOptions(newOptions);
      }
    };

    startQuiz();
  }, [quizCount, vocabularies]);

  const generateOptions = (correctAnswer) => {
    const newOptions = [correctAnswer];
    while (newOptions.length < 4) {
      const randomIndex = Math.floor(Math.random() * vocabularies.length);
      const randomOption = vocabularies[randomIndex].english_word;
      if (!newOptions.includes(randomOption)) {
        newOptions.push(randomOption);
      }
    }
    return shuffleArray(newOptions);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleOptionClick = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const newQuizCount = quizCount + 1;
      setQuizCount(newQuizCount);
      setSelectedOption("");
    }, 1500);
  };

  const getOptionStyle = (option) => {
    if (selectedOption !== "") {
      if (option === correctAnswer) {
        return { backgroundColor: "rgb(34 197 94)" };
      } else if (option === selectedOption) {
        return { backgroundColor: "rgb(220 38 38)" };
      }
    }
    return {};
  };

  const restartQuiz = () => {
    setQuizCount(1);
    setScore(0);
  };

  return (
    <div>
      <div className="body">
        <Header />
        {quizCount <= 10 ? (
          <div className="quizMain">
            <div className="editQuizSection">
              <span id="quizFilter">Level 1, past 30 days</span>
              <span>
                <FaPen />
              </span>
            </div>
            <div id="progress_container">
              <div id="progress_container_text">
                <div id="progress_container_text_align_center">
                  <span id="quizCount">{quizCount}</span> &nbsp; / &nbsp;10
                </div>
              </div>
              <div
                id="loading_bar"
                style={{ width: `${quizCount * 10}%` }}
              ></div>
            </div>
            <div className="quizSection">
              <div className="question" id="quizQuestion">
                {quizQuestion}
              </div>
              <div className="optionContainer">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="option"
                    style={getOptionStyle(option)}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
              {selectedOption !== "" && selectedOption !== correctAnswer && (
                <div className="correctAnswer">
                  The correct answer is: {correctAnswer}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="quizMain">
            <div className="editQuizSection">
              <span id="quizFilter">Level 1, past 30 days</span>
              <span>
                <i className="far fa-edit"></i>
              </span>
            </div>
            <div id="progress_container">
              <div id="progress_container_text">
                <div id="progress_container_text_align_center">
                  <span id="quizCount">10</span> &nbsp; / &nbsp;10
                </div>
              </div>
              <div id="loading_bar_finished"></div>
            </div>
            <div className="quizFinishedSection">
              <p id="finishQuizMessage">
                🎉🎉🎉 Congratulations: You already finished the quiz
              </p>
              <p>Your score:</p>
              <p>
                {Math.round((score / 10) * 100)}% ({score}/10)
              </p>
              <button id="newQuiz" onClick={restartQuiz}>
                New quiz
              </button>
            </div>
          </div>
        )}
        <footer>
          <div>
            <span>Хорошего дня</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default QuizPage;
