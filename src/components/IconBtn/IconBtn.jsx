import styles from "./IconBtn.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconBtn = ({ label, icon, link }) => {
  return (
    <button className={styles.IconBtn} href={link}>
      {/* // may need to replace with router */}
      <FontAwesomeIcon icon={icon} />
      <p>{label}</p>
    </button>
  );
};

IconBtn.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
};

export default IconBtn;
