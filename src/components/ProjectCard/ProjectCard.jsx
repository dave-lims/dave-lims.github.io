import styles from "./ProjectCard.module.scss";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const ProjectCard = ({ title, description, mockup, techStack }) => {
const ProjectCard = ({ title, description, mockup }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.mockupFrame}>
        <div className={styles.mockupBackground}></div>
        <img src={mockup} alt={`${title} mockup`} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mockup: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
