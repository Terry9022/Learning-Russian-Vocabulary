import Header from "../components/Header";

const SigninPage = () => {
  return (
    <div>
      <div className="body">
        <Header />
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
      </div>
    </div>
  );
};
export default SigninPage;
