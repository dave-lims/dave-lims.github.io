import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ selected, navigateToSection }) => {
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
          label="home"
          selected={selected}
          navigateToSection={navigateToSection}
        >
          <FontAwesomeIcon icon="mitten" className={styles.Icon} />
          <p className={styles.label}>Hey</p>
        </Tab>
        <Tab
          setIndicator={setIndicator}
          label="projects"
          selected={selected}
          navigateToSection={navigateToSection}
        >
          <FontAwesomeIcon icon="folder" className={styles.Icon} />
          <p className={styles.label}>Projects</p>
        </Tab>
        <Tab
          setIndicator={setIndicator}
          label="contact"
          selected={selected}
          navigateToSection={navigateToSection}
        >
          <FontAwesomeIcon icon="id-badge" className={styles.Icon} />
          <p className={styles.label}>Contact</p>
        </Tab>

        <Indicator position={indicator} />
      </ul>
    </nav>
  );
};

const Tab = ({
  children,
  setIndicator,
  label,
  selected,
  navigateToSection,
}) => {
  const ref = useRef();

  useEffect(() => {
    const updateIndicator = () => {
      if (!ref.current || selected !== label) return;

      setIndicator({
        left: ref.current.offsetLeft,
        width: ref.current.getBoundingClientRect().width,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator); // Cleanup for future-proofing (Tab doesn't unmount usually)
    };
  }, [selected, label, setIndicator]);

  return (
    <li style={{ zIndex: 1 }}>
      <a
        href={`#${label}`}
        ref={ref}
        onClick={() => navigateToSection(label)}
        className={`${styles.Tab} ${selected == label ? styles.Selected : ""}`}
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
NavBar.propTypes = {
  selected: PropTypes.string.isRequired,
  navigateToSection: PropTypes.func.isRequired,
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  setIndicator: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  navigateToSection: PropTypes.func.isRequired,
};

Indicator.propTypes = {
  position: PropTypes.object.isRequired,
};

export default NavBar;
