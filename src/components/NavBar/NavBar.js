import styles from "./NavBar.module.scss";
// import {Link, NavLink} from "react-router-dom";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navMain}>
      <div className={styles.icon}>
        <span className="fa fa-tasks" />
      </div>

      <ul className={styles.navMainUl}>
        <li className={styles.navMainLi}>
          {/* <Link to="/">Home</Link> */}
          <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined } to="/" >
            Home
          </NavLink>
        </li>
        <li className={styles.navMainLi}>
          {/* <Link to="/favorite">Favorite</Link> */}
          <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined } to="/favorite" >
          Favorite
          </NavLink>
        </li>
        <li className={styles.navMainLi}>
          {/* <Link to="/about">About</Link> */}
          <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined } to="/about" >
          About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
