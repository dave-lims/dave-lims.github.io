import styles from "./ProjectCard.module.scss";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const ProjectCard = ({ title, description, mockup, techStack }) => {
const ProjectCard = ({ title, description, mockup, link }) => {
  return (
    <a className={styles.projectCard} href={link} target="_blank">
      <div className={styles.mockupFrame}>
        <div className={styles.mockupBackground}></div>
        <img src={mockup} alt={`${title} mockup`} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mockup: PropTypes.string.isRequired,
  link: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
