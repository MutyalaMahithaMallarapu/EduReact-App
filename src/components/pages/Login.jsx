import backgroundImage from "../../assets/himalaya_mountains_4k.jpg";


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
          backgroundColor: "blue",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        Login Page
      </div>
    </div>
  );
};

export default Login;
