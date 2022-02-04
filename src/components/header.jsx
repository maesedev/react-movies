import style from "../styles/header.module.css";
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header className={style.header}>
      <ul className={style.navUl}>
        <li key={0}>
          <Link to="/">M</Link>
          </li>
        <li key={1}>
            <form className={style.form}>
                <input placeholder="search movie" type="text" />
                <button className={style.btn}><FaSearch/></button>
            </form>
        </li>
      </ul>
    </header>
  );
}
