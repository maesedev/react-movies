import style from "../styles/movieCard.module.css";
import { BsHandIndexThumb } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect, setState } from "react";
import { reactDOM } from "react-dom";



export function MovieCard({ movie, movieId }) {
  
  const  [isActive, setIsActive] = useState();
  


  let imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const liId = Math.round(Math.random() * 100000);

  useEffect(moreInfo, [isActive]);

  function moreInfo(e) {
    const LI = document.getElementById(liId);

    isActive
      ? (LI.className += ` ${style.selected}`)
      : LI.classList.remove(style.selected);
  }

  function isThisActive() {
    setIsActive(!isActive);
  }

  // [...document.querySelectorAll('li')].map(
  //     item=>  item.addEventListener('click',setIsActive(!isActive)))

  return (
    <li onClick={() => setIsActive(!isActive)} id={liId} className={style.card}>
      <div className={style.posterContainer}>
        <img
          className={style.poster}
          src={imgURL}
          alt={movie.title}
          width={300}
          height={450}
        />

        <div className={style.info}>

          <h2 className={style.float_title}>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p> rate average: {movie.vote_average}</p>
          <h3> Lanzamiento: {movie.release_date} </h3>
          <Link className={style.link} to={"/about/" + movieId}>Look all info</Link>
       
        </div>
      </div>

      <div className={style.movieInfo}>

        <h2>{movie.title}</h2>
        
        <div className={style.playContainer}>

          <p className={style.year}>
            <strong>year:</strong>
            {movie.release_date.split("-")[0]}
          </p>

          <i className={style.icon}>
            <Link  to={"/about/" + movieId}>
              <BsHandIndexThumb></BsHandIndexThumb>info
            </Link>
          </i>

          <p className={style.rated}>
            <strong>rated:</strong>
            {movie.vote_average}
          </p>
        </div>

      </div>
    </li>
  );
}
