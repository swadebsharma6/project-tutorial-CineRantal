import { useState } from "react";
import Aside from "./components/Aside";
import MovieList from "./components/Cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MovieContext } from "./context";


const App = () => {

  const [cartData, setCartData] = useState([]);

  return (
    <>
    <MovieContext.Provider value={{cartData, setCartData}}> 
       <Header/>
       <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Aside></Aside>
          <MovieList></MovieList>
        </div>
       </main>
       <Footer></Footer>
       </MovieContext.Provider>
    </>
  );
};

export default App;