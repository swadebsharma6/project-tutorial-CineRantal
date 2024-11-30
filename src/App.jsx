import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <HomePage></HomePage>
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
};

export default App;
