import styles from "./ProjectCard.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebpackIcon from "../../assets/webpack.svg?react";

const techIcons = {
  // FontAwesome Icons
  html: ["fab", "html5"],
  css: ["fab", "css3-alt"],
  js: ["fab", "square-js"],
  react: ["fab", "react"],
  node: ["fab", "node"],

  // SVGs
  webpack: <WebpackIcon className={styles.techStack__icon} />,
};

const getIcon = (tech) => {
  const icon = techIcons[tech];

  if (Array.isArray(icon)) {
    return <FontAwesomeIcon className={styles.techStack__icon} icon={icon} />;
  } else {
    return icon;
  }
};

const ProjectCard = ({
  title,
  description,
  mockup,
  techStack,
  link,
  github,
}) => {
  return (
    <>
      <div className={styles.projectCard}>
        <a className={styles.projectCard__link} href={link} target="_blank">
          <div className={styles.mockupFrame}>
            <div className={styles.mockupBackground}></div>
            <img src={mockup} alt={`${title} mockup`} />
          </div>

          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </a>

        <TechStack techStack={techStack} github={github} />
      </div>
    </>
  );
};

const TechStack = ({ techStack, github }) => {
  return (
    <>
      <div className={styles.techStack}>
        {github && (
          <a href={github} target="_blank">
            <FontAwesomeIcon
              className={`${styles.techStack__icon} ${styles.github}`}
              icon={["fab", "github"]}
            />
          </a>
        )}
        {github && techStack && (
          <span className={styles.techStack__separator}></span>
        )}
        {techStack &&
          techStack.map((tech) => <span key={tech}>{getIcon(tech)}</span>)}
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mockup: PropTypes.string.isRequired,
  link: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
};

TechStack.propTypes = {
  techStack: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
};

export default ProjectCard;
