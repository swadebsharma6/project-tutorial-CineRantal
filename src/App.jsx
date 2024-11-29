import Aside from "./components/Aside";
import MovieList from "./components/Cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = () => {
  return (
    <>
       <Header/>
       <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Aside></Aside>
          <MovieList></MovieList>
        </div>
       </main>
       <Footer></Footer>
    </>
  );
};

export default App;