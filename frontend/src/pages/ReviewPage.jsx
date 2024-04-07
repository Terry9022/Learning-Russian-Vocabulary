import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import VocabularyCard from "../components/VocabularyCard";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

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

  const chooseReview = (value) => {
    console.log(value.target.value);
    //alert(value.target);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigateTo("/");
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
        <div className="reviewMain">
          <div className="reviewFormSection">
            <span id="reviewCaption">Review daily words</span>
            <select id="level" name="level" onChange={chooseReview}>
            <option id="all" value="all">All</option>
              {level >= "1" &&<option id="level1" value="1">Level 1</option>}
              {level >= "2" && <option id="level2" value="2">Level 2</option>}
              {level >= "3" && <option id="level3" value="3">Level 3</option>}
              {level >= "4" && <option id="level4" value="4">Level 4</option>}
              {level >= "5" && <option id="level5" value="5">Level 5</option>}
              {level >= "6" && <option id="level6" value="6">Level 6</option>}
            </select>
            <select id="timeRange" name="timeRange">
              <option id="past30Days" value="30">Past 30 days</option>
              <option id="past60Days" value="60">Past 60 days</option>
              <option id="past90Days" value="90">Past 90 days</option>
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
                    key={vocabulary._id}
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
