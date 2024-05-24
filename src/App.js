import { Route, Routes } from "react-router-dom";
import Login from "./Components/pages/loginPage/LoginPage";
import SignUp from "./Components/pages/signUpPage/SignUpPage";
import Home from "./Components/pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
