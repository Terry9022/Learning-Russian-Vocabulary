import { FaPen } from "react-icons/fa";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const QuizPage = () => {
  const [vocabularies, setVocabularies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState([]);
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [quizbtn, setQuizbtn] = useState(false);
  const [buildbtn, setBuildbtn] = useState(true);


  const setupQuiz = async () => {
    // set vocabularies to variable
    var vocab = [];
    var level = document.getElementById("quizlevel");
    // get words
    if(level.value != "all"){
      for(var i = 0; i < vocabularies.length; i++){
        if(vocabularies[i].difficulty_level == level.value){
          vocab.push(vocabularies[i]);
        }
      }
    }
    else{
      vocab = vocabularies;
    }
    // select words to be used in quiz
    var qwords = [];
    if(vocab.length <= 10){
      qwords = vocab;
    }
    else{
      var chosen = [];
      for(var i = 0; i < 10; i++){
        var num = Math.floor(Math.random() * (9 - 0 + 1));
        while(chosen.includes(num)){
          num = Math.floor(Math.random() * (9 - 0 + 1));
        }
        chosen.push(num);
        qwords.push(vocab[num])
      }
    }
    //build questions
    const response = await axios.get(
      `http://localhost:5555/api/vocabulary`
    );
    var qs = [];
    for(var i = 0; i < qwords.length; i++){
      var options = [];
      var nums = [];
      var correct_index = Math.floor(Math.random() * (3 - 0 + 1));
      
      for(var j = 0; j < 4; j++){
        if(j == correct_index){
          options.push(qwords[i].english_word);
        }
        else{
          var words = response.data.data;
          var index = Math.floor(Math.random() * (words.length-1 - 0 + 1));
          while(nums.includes(index)){
            index = Math.floor(Math.random() * (words.length-1 - 0 + 1));
          }
          options.push(words[index].english_word);
        }
      }
      qs.push({
        russian_word : qwords[i].russian_word,
        correct_english : qwords[i].english_word,
        option1 : options[0],
        option2 : options[1],
        option3 : options[2],
        option4 : options[3],
        question_number : "question" + String(i+1)
      });
    }
    
    //build html
    var add_html = document.getElementById("quizSection");
    var quiz_html = "";
    for(var i = 0; i < qs.length; i++){
      quiz_html += `<div className="questionBlock ">` + 
      `<div className="question" id="russian">
        <p>`+ qs[i].russian_word + `</p>
      </div>
      <div className=` + qs[i].question_number + ` id=` + qs[i].question_number + ` title="` + qs[i].correct_english + `">
        <label> <input type="radio" className="radioCustomButton" name=` + qs[i].question_number +  ` value="` + qs[i].option1 + `"/>` + qs[i].option1 + `</label>
        <label> <input type="radio" className="radioCustomButton" name=` + qs[i].question_number +  ` value="`+ qs[i].option2 + `"/>` + qs[i].option2 + `</label>
        <label> <input type="radio" className="radioCustomButton" name=` + qs[i].question_number +  ` value="` + qs[i].option3 + `"/>` + qs[i].option3 + `</label>
        <label> <input type="radio" className="radioCustomButton" name=` + qs[i].question_number +  ` value="` + qs[i].option4 + `"/>` + qs[i].option4 + `</label>
      </div>
    </div>`;
    }
    add_html.innerHTML = quiz_html;
    localStorage.setItem("numquestions", qs.length);
    setQuizbtn(!quizbtn);
    setBuildbtn(!buildbtn);
    //set questions
    /*const qset = qs;
    console.log(qset);
    setQuestions(qset);
    console.log(questions);
    alert("Please Wait. Building Quiz...");*/
  };

  const submitQuiz = async () => {
    var numqs = localStorage.getItem("numquestions");
    // grade quiz
    var num_correct = 0;
    for(var i = 1; i <= numqs; i++){
      var question_number = "question" + String(i);
      var correct_ans = document.getElementById(question_number).title;

      var chosen_ans;
      var options = document.getElementsByName("question" + String(i));
      for(var j = 0; j < 4; j++){
        if(options[j].checked){
          chosen_ans = options[j].value;
        }
      }
      if(chosen_ans == correct_ans){
        num_correct++;
      }
    }
    alert(String(num_correct) + "/" + String(numqs) + " answered correctly");
    // reset page
    var quiz_html = document.getElementById("quizSection");
    quiz_html.innerHTML = "";
    setQuizbtn(!quizbtn);
    setBuildbtn(!buildbtn);
  };

  useEffect(() => {
    
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:5555/api/user/${userId}`
        );
        const userData = response.data;
        console.log(userData);
        setUser(userData);
        setName(userData.name);
        setEmail(userData.email);
        setLevel(userData.level);
        setVocabularies(userData.vocabulary_received);
      } catch (error) {
        console.error(error);
        alert("Error fetching user profile");
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <div className="body">
        <Header />
        <div className="quizMain">
          {buildbtn && <div className="editQuizSection">
          <select id="quizlevel" name="level">
            <option id="all" value="all">All</option>
              {level >= "1" &&<option id="level1" value="1">Level 1</option>}
              {level >= "2" && <option id="level2" value="2">Level 2</option>}
              {level >= "3" && <option id="level3" value="3">Level 3</option>}
              {level >= "4" && <option id="level4" value="4">Level 4</option>}
              {level >= "5" && <option id="level5" value="5">Level 5</option>}
              {level >= "6" && <option id="level6" value="6">Level 6</option>}
            </select>
            <button id="quizButton" onClick={setupQuiz}>Start Quiz</button>
            <p>Select level to generate quiz!</p>
          </div>}
          <div className="quizSection" id="quizSection">

          </div>
          { quizbtn && <button onClick={submitQuiz}>Submit Quiz</button>}
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
