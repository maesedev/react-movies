import { useParams } from "react-router-dom";
import style from "../styles/about.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import get from "../hooks/get";

export function About() {

  let { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(async () => {
    const {data} = await get(id);
    
    const genders = await axios.get('https://api.themoviedb.org/3/genre/movie/list',{
      headers:{
        "authorization" :    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjI2OWI2YWY3NjFmYmI1Mjk5NTMyNWIzOTg4OTA4ZiIsInN1YiI6IjYxZThiMmJhYmM4NjU3MDA0MzE3ZjMwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VaqR_LkL2c8oPzl_y65z5ZSxS7w5x2t5LrYnFHVPbII",
        "content-Type"  :    "application/json;charset='utf-8'"
        }}
    ).then(res => res.data.genres )

    let movieGenders = []

    for(let index in genders){
      console.log(genders[index])
    }


    console.log(data.id)
    setDetails( [data]  );
  
  }, []);

  

  // window.location.href.addEventListener('change',()=>alert('cambio la url'))
  
  return (


    
    <div  className={style.movie}>
      {details.map(   movie   =>(
      <div key={movie.id} className={style.infoContainer}>
        <div    className={style.poster}>
        <img 
          className={style.image}
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
          />
        </div>

        <div className={style.info} >
          <h1 className={style.title}>{movie.title}</h1>
          <h2 className={style.release}>{movie.release_date}</h2>
          <h4 className={style.rate}>
            <strong>{movie.vote_average}</strong>
          </h4>
          <p className={style.summary}>{movie.overview}</p>
          <p></p>

        </div>

      </div>
      ) 

      )}
  </div>
  )
}
