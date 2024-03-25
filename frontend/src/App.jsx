import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import ReviewPage from "./pages/ReviewPage";
import SigninPage from "./pages/SigninPage";

import "./index.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/signin" element={<SigninPage />} />
    </Routes>
  );
};

export default App;
