/* eslint-disable react/prop-types */
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
          {new Date(vocabulary.timestamp).toISOString().split("T")[0]}
        </span>
      </div>
    </div>
  );
}
export default VocabularyCard;
