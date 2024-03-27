import { Link } from "react-router-dom";
import { GiCat } from "react-icons/gi";

function Header() {
  return (
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
  );
}
export default Header;
