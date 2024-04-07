import { FaPen } from "react-icons/fa";
import Header from "../components/Header";

const QuizPage = () => {
  return (
    <div>
      <div className="body">
        <div>
        <nav>
              <Link to="/">Home</Link>
              <Link to="/quiz">Quiz</Link>
              <Link to="/review">Review</Link>
              {!user && <Link to="/signin">Sign in</Link>}
              {user && <Link to="/profile">Profile</Link>}
              {user && <Link onClick={handleSignOut}>Sign out</Link>}
          </nav>
        </div>
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
                <span id="quizCount">1</span> &nbsp; / &nbsp;10
              </div>
            </div>
            <div id="loading_bar"></div>
          </div>
          <div className="quizSection">
            <div className="question" id="quizQuestion">
              знать
            </div>
            <div className="optionContainer">
              <div className="option" id="option1">
                you
              </div>
              <div className="option" id="option2">
                to say, to speak
              </div>
              <div className="option" id="option3">
                to know, be aware
              </div>
              <div className="option" id="option4">
                he
              </div>
            </div>
          </div>
        </div>
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
