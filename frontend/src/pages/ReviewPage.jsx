import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import VocabularyCard from "../components/VocabularyCard";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { API_URL } from "../config.js";

// const vocabulary = {
//   russian_word: "вы",
//   english_word: "you",
//   part_of_speech: "pronoun",
//   example_sentence: "http://masterrussian.com/vocabulary/vi_you.htm",
//   difficulty_level: "Level 1",
//   updatedAt: "05/12",
// };

const ReviewPage = () => {
  //alert("hello");
  const [vocabularies, setVocabularies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState([]);
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  const navigateTo = useNavigate();

  const chooseReview = async (value) => {
    const response = await axios.get(
      `${API_URL}/api/user/${localStorage.getItem("userId")}`
    );
    var user_vocab = response.data.vocabulary_received;
    var level_vocab = [];
    if (value.target.value != "all" && value.target.value < "30") {
      // level selection

      // get vocab for selected level
      for (var i = 0; i < user_vocab.length; i++) {
        if (user_vocab[i].difficulty_level == value.target.value) {
          level_vocab.push(user_vocab[i]);
        }
      }
      setVocabularies(level_vocab);
    } else if (value.target.value != "all") {
      // time selection

      var current = new Date();

      for (var i = 0; i < user_vocab.length; i++) {
        var vocabdate = new Date(user_vocab[i].timestamp);
        var datesub =
          (current.getTime() - vocabdate.getTime()) / (1000 * 3600 * 24);

        if (datesub <= parseInt(value.target.value)) {
          level_vocab.push(user_vocab[i]);
        }
      }
      setVocabularies(level_vocab);
    } else {
      //all selected
      const response = await axios.get(`${API_URL}/api/user/${userId}`);
      const userData = response.data;
      setVocabularies(userData.vocabulary_received);
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");

        const response = await axios.get(`${API_URL}/api/user/${userId}`);
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

  //useEffect(() => {
  //  setLoading(true);
  //  axios
  //    .get("http://localhost:5555/api/user/" + user)
  //    .then((response) => {
  //      alert("start");
  //      setVocabularies(response.data.data);
  //      setLevel(response.data.level)
  //      alert(response.data.data);
  //      setLoading(false);
  //      console.log("vocabularies", vocabularies);
  //    })
  //    .catch((error) => {
  //      console.log(error);
  //      alert("Error loading Review");
  //   });
  //}, []);

  return (
    <div>
      <div className="body">
        <Header />
        <div className="reviewMain">
          <div className="reviewFormSection">
            <span id="reviewCaption">Review daily words</span>
            <select id="level" name="level" onChange={chooseReview}>
              <option id="all" value="all">
                All
              </option>
              {level >= "1" && (
                <option id="level1" value="1">
                  Level 1
                </option>
              )}
              {level >= "2" && (
                <option id="level2" value="2">
                  Level 2
                </option>
              )}
              {level >= "3" && (
                <option id="level3" value="3">
                  Level 3
                </option>
              )}
              {level >= "4" && (
                <option id="level4" value="4">
                  Level 4
                </option>
              )}
              {level >= "5" && (
                <option id="level5" value="5">
                  Level 5
                </option>
              )}
              {level >= "6" && (
                <option id="level6" value="6">
                  Level 6
                </option>
              )}
            </select>
            <select id="timeRange" name="timeRange" onChange={chooseReview}>
              <option id="past30Days" value="30">
                Past 30 days
              </option>
              <option id="past60Days" value="60">
                Past 60 days
              </option>
              <option id="past90Days" value="90">
                Past 90 days
              </option>
            </select>
          </div>
          <div className="reviewCardSection">
            {/* Word cards block starts from here */}

            {loading ? (
              <Spinner />
            ) : (
              <>
                {vocabularies.map((vocabulary) => (
                  <VocabularyCard
                    vocabulary={vocabulary}
                    key={vocabulary.russian_word}
                  />
                ))}
              </>
            )}

            {/* Word cards block ends here */}
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
export default ReviewPage;
