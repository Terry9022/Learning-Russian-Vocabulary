import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { GiCat } from "react-icons/gi";
import VocabularyCard from "../components/VocabularyCard";

// const vocabulary = {
//   russian_word: "вы",
//   english_word: "you",
//   part_of_speech: "pronoun",
//   example_sentence: "http://masterrussian.com/vocabulary/vi_you.htm",
//   difficulty_level: "Level 1",
//   updatedAt: "05/12",
// };

const ReviewPage = () => {
  const [vocabularies, setVocabularies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/api/vocabulary")
      .then((response) => {
        setVocabularies(response.data.data);
        setLoading(false);
        console.log("vocabularies", vocabularies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="body">
        <div className="quizHeader">
          <div>Learn Russian</div>
          <div className="quizBanner">
            <div id="quizLogo">
              <GiCat />
            </div>
            <div className="menuIconContainer">
              <div className="menuIcon"></div>
              <div className="menuIcon"></div>
              <div className="menuIcon"></div>
            </div>
          </div>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/quiz">Quiz</Link>
              <Link to="/review">Review</Link>
              <Link to="/signin">Sign in</Link>
            </nav>
          </div>
        </div>
        <div className="reviewMain">
          <div className="reviewFormSection">
            <span id="reviewCaption">Review daily words</span>
            <select id="level" name="level">
              <option value="level1">Level 1</option>
              <option value="level2">Level 2</option>
              <option value="level3">Level 3</option>
              <option value="level4">Level 4</option>
            </select>
            <select id="timeRange" name="timeRange">
              <option value="past30Days">Past 30 days</option>
              <option value="past60Days">Past 60 days</option>
              <option value="past90Days">Past 90 days</option>
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
