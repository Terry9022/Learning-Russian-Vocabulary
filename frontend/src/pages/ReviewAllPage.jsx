/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

// const vocabulary = {
//   russian_word: "вы",
//   english_word: "you",
//   part_of_speech: "pronoun",
//   example_sentence: "http://masterrussian.com/vocabulary/vi_you.htm",
//   difficulty_level: "Level 1",
//   updatedAt: "05/12",
// };

function VocabularyCard({ vocabulary }) {
  return (
    <div className="reviewCard">
      <div className="cardWord">
        <p className="wordRussian">{vocabulary.russian_word}</p>
        <p>{vocabulary.english_word}</p>
        <p>
          {vocabulary.part_of_speech ? vocabulary.part_of_speech : "pronoun"}
        </p>
        <a
          href={vocabulary.example_sentence}
          target="_blank"
          className="exampleSentences"
        >
          Example sentences
        </a>
      </div>
      <div className="cardInfo">
        <span className="cardInfoLevel">
          Level {vocabulary.difficulty_level}
        </span>
        <span className="cardInfoTime">
          {new Date(vocabulary.updatedAt).toISOString().split("T")[0]}
        </span>
      </div>
    </div>
  );
}

const ReviewAllPage = () => {
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
        <Header />
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
export default ReviewAllPage;
