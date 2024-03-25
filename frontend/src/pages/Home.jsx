import { Link } from "react-router-dom";
import "../App.css";
import { GiCat } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      <div className="body">
        <div className="homeHeader">
          <div>Learn Russian</div>
          <div className="homeBanner">
            <div id="logo">
              <GiCat />
            </div>
            <div id="title">Хорошего дня</div>
            <div id="subtitle">russian language learning</div>
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
        <div className="homeMain">
          <div className="subscribeSection">
            <div id="resultSubscribe"></div>
            <h3>Subscribe to receive daily vocab word emails.</h3>
            <form>
              <select id="level" name="level" required>
                <option value="" disabled selected hidden>
                  Choose a level
                </option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
              </select>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
              />
              <input id="subscribeBtn" type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="levelSection">
            <h2>Which level are you?</h2>
            <p>
              Click on each level below to see sample words, or check out recent
              daily words.
            </p>
            <div className="levelContainer">
              <div className="btnContainer">
                <button className="level_btn" autoFocus>
                  Level 1
                </button>
                <button className="level_btn">Level 2</button>
                <button className="level_btn">Level 3</button>
                <button className="level_btn">Level 4</button>
              </div>
              <div className="cardContainer">
                <div className="card">
                  <p>вы</p>
                  <p>you</p>
                  <p>pronoun</p>
                </div>
                <div className="card">
                  <p>знать</p>
                  <p>to know, be aware</p>
                  <p>verb</p>
                </div>
                <div className="card">
                  <p>сказать</p>
                  <p>to say, to speak</p>
                  <p>verb</p>
                </div>
                <div className="card">
                  <p>большой</p>
                  <p>big, large, important</p>
                  <p>adjective</p>
                </div>
              </div>
            </div>
          </div>
          <div className="introSection">
            <h2>Frequently Asked Questions</h2>
            <p>What am I subscribing to?</p>
            <p>
              Select your Russian level and subscribe to receive daily emails
              with vocabulary words at this level.
            </p>
            <br />
            <p>What does Хорошего дня mean?</p>
            <p>Have a wonderful day: Study hard and make progress every day.</p>
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

export default Home;
