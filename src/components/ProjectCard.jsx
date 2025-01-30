import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types";

const ProjectCard = ({ image, title, description, techStacks }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={`Mockup Image for ${title}`} />

      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.techStack}>
          {techStacks.map((tech, index) => (
            <p key={index} className={styles.techStackItem}>
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Define the expected types of the props
ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  techStacks: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
