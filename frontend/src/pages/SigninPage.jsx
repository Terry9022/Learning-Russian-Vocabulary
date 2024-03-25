import { Link } from "react-router-dom";
import { GiCat } from "react-icons/gi";

const SigninPage = () => {
  return (
    <div>
      <body>
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
        <div className="signinMain">
          <div className="signinSection">
            <p>
              To sign in, enter your email to receive a one-time sign-in link.
            </p>
            <p>
              Not signed up yet? Head to the
              <a id="signinToHome" href="home.html">
                home
              </a>{" "}
              page, select a vocab list, and click subscribe.
            </p>
            <form>
              <input
                type="email"
                id="signinEmail"
                name="email"
                placeholder="Email address"
                required
              />
              <input id="signinBtn" type="submit" value="Send sign-in link" />
            </form>
          </div>
        </div>
        <footer>
          <div>
            <span>Хорошего дня</span>
          </div>
        </footer>
      </body>
    </div>
  );
};
export default SigninPage;
