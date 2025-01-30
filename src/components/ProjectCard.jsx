import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  return (
    <>
      <div className={styles.card}>ProjectCard</div>

      <div>
        <h3 className={styles.projectTitle}>Project Title</h3>
        <p className={styles.projectDescription}>
          Project Description BLAH BLAH BLAH BLAH BLAH BLAH
        </p>
        <div className={styles.techStack}>
          <p className={styles.techStackItem}>HTML</p>
          <p className={styles.techStackItem}>CSS</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
