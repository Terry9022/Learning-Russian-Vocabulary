export const QuizFinishedPage = () => {
  return (
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
  );
};
