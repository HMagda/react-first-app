import styles from "./NavBar.module.scss";
// import 'font-awesome/css/font-awesome.min.css';

const NavBar = () => {
  return (
    
      <nav className={styles.navMain}>
        <div className={styles.icon}>
          <span className="fa fa-tasks" />
        </div>

        <ul className={styles.navMainUl}>
          <li className={styles.navMainLi}>
            <a href="/home">Home</a>
          </li>
          <li className={styles.navMainLi}>
            <a href="/favorite">Favorite</a>
          </li>
          <li className={styles.navMainLi}>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>

  );
};

export default NavBar;
