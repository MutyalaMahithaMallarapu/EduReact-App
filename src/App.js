import { Route, Routes } from "react-router-dom";
import Login from "./Components/pages/loginPage/LoginPage";
import SignUp from "./Components/pages/signUpPage/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
