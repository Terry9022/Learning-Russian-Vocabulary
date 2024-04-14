import { FaPen } from "react-icons/fa";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const QuizDemoPage = () => {
  const [quizCount, setQuizCount] = useState(1);
  const [quizQuestion, setQuizQuestion] = useState("знать");
  const [option1, setOption1] = useState("you");
  const [option2, setOption2] = useState("to say, to speak");
  const [option3, setOption3] = useState("to know, be aware");
  const [option4, setOption4] = useState("he");

  useEffect(() => {
    const Questions = [
      "наш",
      "глаз",
      "он",
      "уже",
      "говорить",
      "дело",
      "друг",
      "хороший ",
    ];
    const Option1 = [
      "our, ours",
      "life",
      "she",
      "man, person",
      "yes, but",
      "business, affair, matter",
      "time, once, since",
      "good, nice",
    ];
    const Option2 = [
      "my, our, your",
      "eye; sight",
      "that",
      "still, yet",
      "to say, to tell, to speak",
      "where",
      "two",
      "to look, watch",
    ];
    const Option3 = [
      "now, right, well, come on",
      "first, front, former",
      "to be",
      "for, to",
      "would",
      "very",
      "to see",
      "simply",
    ];
    const Option4 = [
      "where",
      "nothing",
      "he",
      "already, by now",
      "what, which, how",
      "with",
      "friend",
      "to sit",
    ];

    const options = document.getElementsByClassName("option");
    const loading_bar = document.getElementById("loading_bar");

    const handleOptionClick = () => {
      const newQuizCount = quizCount + 1;
      setQuizCount(newQuizCount);

      if (newQuizCount >= 10) {
        console.log("quiz is finished");
      } else {
        const barWidth = newQuizCount * 10;
        loading_bar.style.width = `${barWidth}%`;

        const elementCount = newQuizCount - 2;
        setQuizQuestion(Questions[elementCount]);
        setOption1(Option1[elementCount]);
        setOption2(Option2[elementCount]);
        setOption3(Option3[elementCount]);
        setOption4(Option4[elementCount]);
      }
    };

    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", handleOptionClick);
    }

    return () => {
      for (let i = 0; i < options.length; i++) {
        options[i].removeEventListener("click", handleOptionClick);
      }
    };
  }, [quizCount]);

  return (
    <div>
      <div className="body">
        <Header />
        {quizCount < 10 ? (
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
              <div id="loading_bar"></div>
            </div>
            <div className="quizSection">
              <div className="question" id="quizQuestion">
                {quizQuestion}
              </div>
              <div className="optionContainer">
                <div className="option" id="option1">
                  {option1}
                </div>
                <div className="option" id="option2">
                  {option2}
                </div>
                <div className="option" id="option3">
                  {option3}
                </div>
                <div className="option" id="option4">
                  {option4}
                </div>
              </div>
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
              <p>70% (7/10)</p>
              <button id="newQuiz">New quiz</button>
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

export default QuizDemoPage;
