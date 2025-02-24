import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/melol.png"; // Import the image properly

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <ul>
        <li>
          <a href="#">
            <img src={logo} alt="logo" /> {/* Use the imported image */}
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="#projects">
            <FontAwesomeIcon icon="folder" className={styles.Icon} />
            <p>Work</p>
          </a>
        </li>
        <li>
          <a href="#contact">
            <FontAwesomeIcon icon="mitten" className={styles.Icon} />
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
