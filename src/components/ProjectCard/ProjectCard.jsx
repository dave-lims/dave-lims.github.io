import styles from "./ProjectCard.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebpackIcon from "../../assets/webpack.svg?react";

const ProjectCard = ({
  title,
  description,
  mockup,
  techStack,
  link,
  github,
}) => {
  // **********
  // Rendering Mockup images
  // -- len 1: a flat phone image
  // -- len 2: [phone mock, logo] == logo on left (above), phone on right
  // **********
  const renderMockup = (mockup) => {
    if (!Array.isArray(mockup)) {
      return (
        <img
          className={styles.mockup__img}
          src={mockup}
          alt={`${title} mockup`}
        />
      );
    } else {
      return (
        <>
          <img
            className={styles.mockup__phone}
            src={mockup[0]}
            alt={`${title} mockup`}
          />
          <img
            className={styles.mockup__logo}
            src={mockup[1]}
            alt={`${title} logo`}
          />
        </>
      );
    }
  };

  return (
    <>
      <div className={styles.projectCard}>
        <a className={styles.projectCard__link} href={link} target="_blank">
          <div className={styles.mockup}>
            <div className={styles.mockup__background}></div>
            {renderMockup(mockup)}
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

// **********
// Rendering Tech Stack
// **********
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

// **********
// Helper Function for Tech Stack Icons
// **********
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

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mockup: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  link: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
};

TechStack.propTypes = {
  techStack: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
};

export default ProjectCard;
