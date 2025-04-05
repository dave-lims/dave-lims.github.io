import styles from "./IconBtn.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconBtn = ({ type, label, icon, link }) => {
  return (
    <a
      className={`${styles.IconBtn} ${
        type === "button" ? styles.Button : styles.Link
      }`}
      href={link}
      target="_blank"
    >
      {/* // may need to replace with router */}
      <FontAwesomeIcon icon={icon} className={styles.Icon} />
      <p>{label}</p>
    </a>
  );
};

IconBtn.propTypes = {
  type: PropTypes.oneOf(["button", "link"]),
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  link: PropTypes.string,
};

export default IconBtn;
