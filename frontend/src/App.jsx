import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import ReviewPage from "./pages/ReviewPage";
import SigninPage from "./pages/SigninPage";
import ReviewAllPage from "./pages/ReviewAllPage";
import QuizDemoPage from "./pages/QuizDemoPage";
import Profile from "./pages/Profile";
import ProfileWithVisualization from "./pages/ProfileWithVisualization";

import "./index.css";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/quiz-demo" element={<QuizDemoPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/review-all" element={<ReviewAllPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/profile-with-visualization"
        element={<ProfileWithVisualization />}
      />
    </Routes>
  );
};

export default App;
