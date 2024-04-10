
function QuizQuestion({ question }) {
    return (
      <div className="questionBlock " id={question.question_number}>
        <div className="question" id="russian">
          <p>{question.russian_word}</p>
        </div>
        <div className="answers" id={question.correct_english}>
          <input type="radio" className="radioCustomButton" name="radioGroup" id="option1" value={question.option1}/>
          <input type="radio" className="radioCustomButton" name="radioGroup" id="option2" value={question.option2}/>
          <input type="radio" className="radioCustomButton" name="radioGroup" id="option3" value={question.option3}/>
          <input type="radio" className="radioCustomButton" name="radioGroup" id="option4" value={question.option4}/>
        </div>
      </div>
    );
}
export default QuizQuestion;