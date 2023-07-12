import LogoPage from "./components/LogoPage.js";
import SplashPage from "./components/SplashPage.js";
import { Routes, Route, redirect } from "react-router-dom";
import "../src/styles/App.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  // Intro to Splash Page + Exit from LogoPage

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/logoPage");

    setTimeout(() => {
      navigate("/splashPage");
    }, 3000);
  }, []);

  return (
    <div className="app wrapper">
      <Routes>
        <Route path="/logoPage" element={<LogoPage />} />
        <Route path="/splashPage" element={<SplashPage />} />
      </Routes>
    </div>
  );
}

export default App;



