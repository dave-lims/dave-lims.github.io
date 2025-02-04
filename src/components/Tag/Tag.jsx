import styles from "./Tag.module.css";
import PropTypes from "prop-types";

const Tag = ({ icon, text }) => {
  return (
    <>
      <div className={styles.tag}>
        <span className={icon}></span>
        <p>{text}</p>
      </div>
    </>
  );
};

Tag.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Tag;
