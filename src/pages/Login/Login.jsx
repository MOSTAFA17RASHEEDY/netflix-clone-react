import { useState } from "react";
import "./Login.css";
import Logo from "../../assets/Netflix_Logo.png";
import { login, signUp } from "../../firebase";
function Login() {
  const [isSignUp, setisSignUp] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const user_auth = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (isSignUp === "Sign Up") {
      await signUp(name, email, password);
    } else {
      await login(email, password);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isloading ? (
        <div className="spanContainer">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="container">
          <div className="imgContainer">
            <img src={Logo} alt="Netflix Logo" />
          </div>
          <div className="formContainer">
            <h3>{isSignUp === "Sign Up" ? "Sign Up" : "Sign In"}</h3>
            {isSignUp === "Sign Up" && (
              <input
                className="formInput"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Full Name"
              />
            )}
            <input
              className="formInput"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <input
              className="formInput"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <button onClick={user_auth} className="btn">
              {isSignUp === "Sign Up" ? "Sign Up" : "Sign In"}
            </button>
            {isSignUp === "Sign Up" ? (
              <p>
                Already have an account?{" "}
                <span onClick={() => setisSignUp("Sign In")}>Sign In Now</span>
              </p>
            ) : (
              <p>
                New to Netflix?{" "}
                <span onClick={() => setisSignUp("Sign Up")}>Sign Up Now</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
