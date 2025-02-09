import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ image, title, description, techStacks, link }) => {
  return (
    <a className={styles.projectCard} href={link} target="_blank">
      <div className={styles.card}>
        <img src={image} alt={`Mockup Image for ${title}`} />
      </div>

      <div className={styles.overlay}>
        <div className={styles.cardContent}>
          <h4>{title}</h4>
          <p>{description}</p>

          <div className={styles.cardFooter}>
            <div className={styles.techStack}>
              {techStacks.map((tech, index) => (
                <p key={index} className={styles.techStackItem}>
                  {tech}
                </p>
              ))}
            </div>
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-up-right-from-square"
              size="lg"
              className="icon"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

// Define the expected types of the props
ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  techStacks: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
};

export default ProjectCard;
