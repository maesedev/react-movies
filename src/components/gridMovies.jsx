import { MovieCard } from "./movieCard";
import style from "../styles/gridMovies.module.css";
import { Link } from "react-router-dom";
import { About } from "./about";
import { useEffect,useState } from "react";
import get from "../hooks/get";

export function GridMovies() {
  
  
  const [movies, setMovies] = useState(new Array())

  useEffect(async id => {
    let {data} = await get()
    setMovies( data.results )
  }, []);

  
  

  return (
    <div className='movies-container'>
      <h2 className="secondaryTitle">
        Conoce las mejores peliculas de este año
      </h2>

      <ul className={style.ulCont} key="movies">
        {movies.map(    movie    => (
            <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
        ))}
      </ul>
    </div>
  );
}
