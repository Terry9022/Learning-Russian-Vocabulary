import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import ReviewPage from "./pages/ReviewPage";
import SigninPage from "./pages/SigninPage";

import Profile from "./pages/Profile";

import "./index.css";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
