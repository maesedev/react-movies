import { Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import { GridMovies } from "./gridMovies";
import { About } from "./about";
import style from "../styles/special/spinner.css";
import { Spinner } from "./spinner";

export default function routes() {


  window.addEventListener("load", (e) => {
      document.querySelector(".spinner-bg").classList.toggle("hide");
  }); 
  window.addEventListener('popState',()=>alert('cambio de pagina'))

  return (
    <div>
      <Link to="/">home</Link>
      <br />
      <Link to="/about/a12">id unknown</Link>
      <br />
      <Link to="/asd">asd</Link>

      <Spinner key="spinner" />

      <Routes>
        <Route path="/" element={<GridMovies />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="*" element={<div>404 Status Error</div>} />
      </Routes>
    </div>
  );
}
