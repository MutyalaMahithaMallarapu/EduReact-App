import { Link } from "react-router-dom";
import ERAInput from "../../atoms/ERAInput/ERAInput";
import { useState } from "react";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./LoginPage.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
        position: "top-right",
        autoClose: 3000,
      });
      window.location.href = "/home";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="backgroundStyling">
        <div className="loginStyle">
          <form onSubmit={handleLogin}>
            <p className="haveAnAcc"> Have an account ? </p>
            <ERAInput
              name="Enter your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ERAInput
              name="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="buttonStyle">
              LOGIN
            </button>
            <p className="signUp">
              New to EduReact App,
              <Link to="/signup" className="signUpLink">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
