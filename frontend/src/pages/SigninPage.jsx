import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { API_URL } from "../config.js";

const SigninPage = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        email,
        password,
      });
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", decodedToken.userId);
      alert("User logged in successfully");
      navigateTo("/");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="body">
        <Header />
        <div className="signinMain">
          <div className="signinSection">
            <p>To sign in, enter your email and password</p>
            <p>
              Not signed up yet? Head to the{" "}
              <Link id="signinToHome" to="/">
                Home
              </Link>{" "}
              page, select a vocab list, and click subscribe.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="signinEmail"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
              <input id="signinBtn" type="submit" value="Sign In" />
            </form>
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
export default SigninPage;
