import styles from "./Card.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap = {
  email: "fa-regular fa-envelope",
  linkedin: "fa-brands fa-linkedin-in",
  github: "fa-brands fa-github",
  arrow: "fa-solid fa-arrow-up-right-from-square",
};

const Card = ({ label, contactInfo, icon, img }) => {
  return (
    <>
      <div className={styles.Card}>
        <div className={styles.container}>
          <div className={styles.content}>
            {img && <img src={img} alt={label} />}
            <div>
              <h3>{label}</h3>
              <p>{contactInfo}</p>
            </div>
          </div>

          <FontAwesomeIcon icon={iconMap[icon]} size="lg" className="icon" />
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  contactInfo: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Card;
