import { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/melol.png";

const NavBar = () => {
  const [selected, setSelected] = useState("home");
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className={styles.NavBar}>
      <ul>
        <Tab
          setIndicator={setIndicator}
          selected={selected}
          setSelected={setSelected}
          label="Home"
        >
          <img src={logo} alt="logo" />
          {/* <p>Home</p> */}
        </Tab>
        <Tab
          setIndicator={setIndicator}
          label="projects"
          selected={selected}
          setSelected={setSelected}
        >
          <FontAwesomeIcon icon="folder" className={styles.Icon} />
          <p>Projects</p>
        </Tab>
        <Tab
          setIndicator={setIndicator}
          label="contact"
          selected={selected}
          setSelected={setSelected}
        >
          <FontAwesomeIcon icon="mitten" className={styles.Icon} />
          <p>Contact</p>
        </Tab>

        <Indicator position={indicator} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, setIndicator, label, selected, setSelected }) => {
  const ref = useRef();

  return (
    <li style={{ zIndex: 1 }}>
      <a
        href={`#${label}`}
        ref={ref}
        onClick={() => {
          if (!ref?.current) return; // If the ref is not found, return

          const { width } = ref.current.getBoundingClientRect();

          setSelected(label);
          setIndicator({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className={selected == label ? styles.Selected : ""}
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
  label: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

Indicator.propTypes = {
  position: PropTypes.object.isRequired,
};

export default NavBar;
