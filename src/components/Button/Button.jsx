import styles from "./Button.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap = {
  linkedin: "fa-brands fa-linkedin-in",
  github: "fa-brands fa-github",
  resume: "fa-regular fa-file-pdf",
  email: "fa-regular fa-envelope",
};

const Button = ({ icon }) => {
  return (
    <div className={styles.button}>
      {icon && (
        <FontAwesomeIcon
          icon={iconMap[icon]}
          size="lg"
          className={`icon ${styles.icon}`}
        />
      )}
      <div></div>
    </div>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
};

export default Button;
