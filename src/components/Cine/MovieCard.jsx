import { useContext, useState } from "react";
import { getImgUrl } from "../../utils/cineUtils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { MovieContext } from "../../context";

const MovieCard = ({ movie }) => {

    const [showModal, setShowModal] = useState(false);
    const  [selectedMovie, setSelectedMovie] = useState(null);

    // useContext 
    const {cartData, setCartData} = useContext(MovieContext);

    const handleModalClose =()=>{
      setSelectedMovie(null);
      setShowModal(false);
    }

    const handleMovieSelect=(movie)=>{
        setSelectedMovie(movie);
        setShowModal(true)
    }

    // HandleAddToCart 
    const handleAddToCart =(event, movie)=>{
      event.stopPropagation();

      const found = cartData.find((item)=> {
        return item.id ===movie.id;
      })

      if(!found){
        setCartData([...cartData, movie])
      }else{
        alert(`You Already Added the ${movie.title} the Movie`)
      }

    }

  return (
    <>
    {showModal && <MovieDetailsModal
    movie={selectedMovie}
    handleModalClose={handleModalClose}
    handleAddToCart={handleAddToCart}
    ></MovieDetailsModal>}
      <figure
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={()=> handleMovieSelect(movie)}>
        <img
          className="w-full object-cover"
          src={getImgUrl(movie.cover)}
          alt="Cover"
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
           <Rating value={movie.rating}></Rating>
          </div>
          <a
            onClick={(e)=>handleAddToCart( e, movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>$ {movie.price} | Add to Cart</span>
          </a>
        </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
