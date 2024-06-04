import { useState } from "react";
import { Link } from "react-router-dom";
import ERAInput from "../../atoms/ERAInput/ERAInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e, email, password, name);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          password: password,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
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
          <form onSubmit={handleRegister}>
            <p className="haveAnAcc">Signup with </p>
            <ERAInput
              name="Enter your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <ERAInput name="Confirm Password" type="password" />
            <button type="submit" className="buttonStyle">
              SIGNUP
            </button>
            <p className="signUp">
              {" "}
              Already have an account,{" "}
              <Link to="/login" className="signUpLink">
                {" "}
                Login{" "}
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
