import LogoPage from "./components/LogoPage.js";
import { Routes, Route } from "react-router-dom";
import "../src/styles/App.scss";

function App() {
  return (
    <div className="app wrapper">
      <Routes>
        <Route path="" element={<LogoPage />} />
      </Routes>
    </div>
  );
}

export default App;


// What api can I use?

/* 
PseudoCode 
Make the route of the logoPage url /logoPage 
Using useEffect make a function that says on page load go to this url 
Import useEffect on LogoPage.js and make img appear a few seconds after page load 
Add animation transition effect to the oneKard Logo 
After about 10seconds render SplashPage.js
Insert slide show of three images that are able to scroll horizontally 
Add event listener on the Register button that directs users (useHistory) to the RegisterPage.js 

(refer to component pages on notion)
*/
