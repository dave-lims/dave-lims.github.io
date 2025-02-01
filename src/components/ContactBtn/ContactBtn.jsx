import styles from "./ContactBtn.module.css";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  email: faEnvelope,
  linkedin: faLinkedinIn,
  github: faGithub,
  arrow: faArrowUpRightFromSquare,
};

const ContactBtn = ({ label, contactInfo, icon, img }) => {
  return (
    <>
      <div className={styles.contactBtn}>
        <div className={styles.container}>
          <div className={styles.content}>
            {img && <img src={img} alt={label} />}
            <div>
              <h3>{label}</h3>
              <p>{contactInfo}</p>
            </div>
          </div>

          <FontAwesomeIcon
            icon={iconMap[icon]}
            size="lg"
            className={styles.icon}
          />
        </div>
      </div>
    </>
  );
};

ContactBtn.propTypes = {
  label: PropTypes.string.isRequired,
  contactInfo: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default ContactBtn;
