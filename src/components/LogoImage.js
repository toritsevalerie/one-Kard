import Logo from "../assets/Logo.png";
import { useEffect, useState } from "react";

const LogoImage = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  const logoAnimation = () => {
    setTimeout(() => {
      setIsLogoVisible(true);
    }, 1000);
  };
  useEffect(logoAnimation, []);

  return (
    <>
      {isLogoVisible && (
        <img className="logoImage" src={Logo} alt="one kard logo" />
      )}
    </>
  );
};
export default LogoImage;
