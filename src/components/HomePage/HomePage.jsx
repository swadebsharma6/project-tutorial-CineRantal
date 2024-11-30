import { useContext } from "react";
import Aside from "../Aside";
import MovieList from "../Cine/MovieList";
import Footer from "../Footer";
import Header from "../Header";
import { ThemeContext } from "../../context";

const HomePage = () => {
      const{darkMode} = useContext(ThemeContext)

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Aside></Aside>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
