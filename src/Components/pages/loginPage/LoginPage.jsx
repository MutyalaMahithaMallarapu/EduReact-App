import ERAButton from "../../atoms/ERAButton/ERAButton";
import  ERAInput  from "../../atoms/ERAInput/ERAInput";
import './LoginPage.css'

const Login = () => {
  return (
    <div className="backgroundStyling">
      <div className="loginStyle" >
        <p className="haveAnAcc"> Have an account ? </p>
        <ERAInput name="User Name" type ="Text"/>
        <ERAInput name="Password" type ="Password"/>
        <ERAButton Name="Login"/>
        <p className="signUp"> New to EduReact App, <href  className="signUpLink"> Signup </href> </p> 
      </div>
    </div>
  );
};

export default Login;
