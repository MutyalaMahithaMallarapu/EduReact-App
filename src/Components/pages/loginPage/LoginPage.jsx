import backgroundImage from "../../../assets/himalaya_mountains_4k.jpg";
import  ERAInput  from "../../atoms/ERAInput/ERAInput";

const Login = () => {
  return (
    <div
      style={{
        background: `url(${backgroundImage})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        
<br />
        <ERAInput name="User Name" type ="Text"/>
        <ERAInput name="Password" type ="Password"/>
      </div>
    </div>
  );
};

export default Login;
