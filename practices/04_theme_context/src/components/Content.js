import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>Thème actuel : {theme}</p>
    </div>
  );
};

export default Content;
