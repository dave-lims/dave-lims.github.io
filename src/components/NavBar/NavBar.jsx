import { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/melol.png";

const NavBar = () => {
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className={styles.NavBar}>
      <ul>
        <Tab setIndicator={setIndicator} href="#home">
          <img src={logo} alt="logo" />
          {/* <p>Home</p> */}
        </Tab>
        <Tab setIndicator={setIndicator} href="#projects">
          <FontAwesomeIcon icon="folder" className={styles.Icon} />
          <p>Work</p>
        </Tab>
        <Tab setIndicator={setIndicator} href="#contact">
          <FontAwesomeIcon icon="mitten" className={styles.Icon} />
          <p>Contact</p>
        </Tab>

        <Indicator position={indicator} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, setIndicator, href }) => {
  const ref = useRef();

  return (
    <li style={{ zIndex: 10 }}>
      <a
        href={href}
        ref={ref}
        onClick={() => {
          if (!ref?.current) return; // If the ref is not found, return

          const { width } = ref.current.getBoundingClientRect();

          setIndicator({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
      >
        {children}
      </a>
    </li>
  );
};

const Indicator = ({ position }) => {
  return (
    <li
      style={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className={styles.Indicator}
    ></li>
  );
};

// Prop Type Validation
Tab.propTypes = {
  children: PropTypes.node.isRequired,
  setIndicator: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
};

Indicator.propTypes = {
  position: PropTypes.object.isRequired,
};

export default NavBar;
