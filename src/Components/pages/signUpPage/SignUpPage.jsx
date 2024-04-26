import { Link } from "react-router-dom";
import ERAButton from "../../atoms/ERAButton/ERAButton";
import ERAInput from "../../atoms/ERAInput/ERAInput";

const SignUp = () => {
  return (
    <div className="backgroundStyling">
      <div className="loginStyle">
        <p className="haveAnAcc">Signup with </p>
        <ERAInput name="Enter your Name" type="Text" />
        <ERAInput name="Enter your Email" type="Text" />
        <ERAInput name="Enter Password" type="Password" />
        <ERAInput name="Confirm Password" type="Password" />
        <ERAButton Name="SIGNUP" />
        <p className="signUp">
          {" "}
          Already have an account,{" "}
          <Link to="/login" className="signUpLink">
            {" "}
            Login{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
export default SignUp;
