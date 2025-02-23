import styles from "./HomeNav.module.css";
import me from "/favicon.svg";
// import me from "../../assets/me.svg";

const HomeNav = () => {
  return (
    <nav className={styles.HomeNav}>
      <ul>
        <li>
          <a href="#hero">
            <img src={me} alt="me" />
          </a>
        </li>
        <li>
          <a href="#projects">b</a>
        </li>
        <li>
          <a href="#things">c</a>
        </li>
        <li>
          <a href="#contacts">d</a>
        </li>
      </ul>
    </nav>

    // <nav className={styles.NavBar}>
    //   <ul>
    //     <li>
    //       <NavLink to="/">a</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/">b</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/">c</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/">d</NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default HomeNav;
