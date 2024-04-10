import { Link } from "react-router-dom";
import { GiCat } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigateTo = useNavigate();
  const user = localStorage.getItem("userId");

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigateTo("/");
  };

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
          {user ? (
            <Link to="/review">Review</Link>
          ) : (
            <Link to="/review-all">Review</Link>
          )}
          {!user && <Link to="/signin">Sign in</Link>}
          {user && <Link to="/profile">Profile</Link>}
          {user && <Link onClick={handleSignOut}>Sign out</Link>}
        </nav>
      </div>
    </div>
  );
}
export default Header;
