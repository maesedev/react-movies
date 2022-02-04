import axios from 'axios'
import {useNavigate} from "react-router-dom"
const URL = 'https://api.themoviedb.org/3'


export default async function get( id) {
    let response 
    try{
        let fetchingUrl = (id) ? 
        `${URL}/movie/${  id  }` : `${URL}/discover/movie` 

        response =  await axios.get(fetchingUrl,
        {headers:{
            "authorization" :    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjI2OWI2YWY3NjFmYmI1Mjk5NTMyNWIzOTg4OTA4ZiIsInN1YiI6IjYxZThiMmJhYmM4NjU3MDA0MzE3ZjMwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VaqR_LkL2c8oPzl_y65z5ZSxS7w5x2t5LrYnFHVPbII",
            "content-Type"  :    "application/json;charset='utf-8'"
            }}
        )
        .then((data) =>{
            return data});
    }
    catch(e){
        console.log('error en el get.js')
    }

    return response
}