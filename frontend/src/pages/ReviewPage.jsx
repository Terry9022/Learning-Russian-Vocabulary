import { Link } from "react-router-dom";
import { GiCat } from "react-icons/gi";

const ReviewPage = () => {
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
            {/* <!--Word cards block starts from here-->

      <!--This is one word card component--> */}
            <div className="reviewCard">
              <div className="cardWord">
                <p className="wordRussian">вы</p>
                <p>you</p>
                <p>pronoun</p>
                <a
                  href="http://masterrussian.com/vocabulary/vi_you.htm"
                  target="_blank"
                  className="exampleSentences"
                >
                  Example sentences
                </a>
              </div>
              <div className="cardInfo">
                <span className="cardInfoLevel">Level 1</span>
                <span className="cardInfoTime">05/12</span>
              </div>
            </div>
            {/* <!--It is one word card component above here-->
      <!--This is one word card component--> */}
            <div className="reviewCard">
              <div className="cardWord">
                <p className="wordRussian">сказать</p>
                <p>to say, to speak</p>
                <p>verb</p>
                <a
                  href="http://masterrussian.com/vocabulary/skazat.htm"
                  target="_blank"
                  className="exampleSentences"
                >
                  Example sentences
                </a>
              </div>
              <div className="cardInfo">
                <span className="cardInfoLevel">Level 1</span>
                <span className="cardInfoTime">05/11</span>
              </div>
            </div>
            {/* <!--It is one word card component above here-->
      <!--This is one word card component--> */}
            <div className="reviewCard">
              <div className="cardWord">
                <p className="wordRussian">он</p>
                <p>he</p>
                <p>pronoun</p>
                <a
                  href="http://masterrussian.com/vocabulary/on_he.htm"
                  target="_blank"
                  className="exampleSentences"
                >
                  Example sentences
                </a>
              </div>
              <div className="cardInfo">
                <span className="cardInfoLevel">Level 1</span>
                <span className="cardInfoTime">05/10</span>
              </div>
            </div>
            {/* <!--It is one word card component above here-->
      <!--This is one word card component--> */}
            <div className="reviewCard">
              <div className="cardWord">
                <p className="wordRussian">знать</p>
                <p>to know, be aware</p>
                <p>verb</p>
                <a
                  href="http://masterrussian.com/vocabulary/znat.htm"
                  target="_blank"
                  className="exampleSentences"
                >
                  Example sentences
                </a>
              </div>
              <div className="cardInfo">
                <span className="cardInfoLevel">Level 1</span>
                <span className="cardInfoTime">05/09</span>
              </div>
            </div>
            {/* <!--It is one word card component above here-->
      <!--This is one word card component--> */}
            <div className="reviewCard">
              <div className="cardWord">
                <p className="wordRussian">большой</p>
                <p>big, large, important</p>
                <p>adjective</p>
                <a
                  href="http://masterrussian.com/vocabulary/bolshoy_big.htm"
                  target="_blank"
                  className="exampleSentences"
                >
                  Example sentences
                </a>
              </div>
              <div className="cardInfo">
                <span className="cardInfoLevel">Level 1</span>
                <span className="cardInfoTime">05/08</span>
              </div>
            </div>
            {/* <!--It is one word card component above here-->
      <!--This is one word card component--> */}
            <div className="reviewCard">
              <div className="cardWord">
                <p className="wordRussian">первый</p>
                <p>first, front, former</p>
                <p>adjective, number</p>
                <a
                  href="http://masterrussian.com/vocabulary/perviy_first.htm"
                  target="_blank"
                  className="exampleSentences"
                >
                  Example sentences
                </a>
              </div>
              <div className="cardInfo">
                <span className="cardInfoLevel">Level 1</span>
                <span className="cardInfoTime">05/07</span>
              </div>
            </div>
            {/* <!--It is one word card component above here-->

      <!--Word cards block ends here--> */}
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
