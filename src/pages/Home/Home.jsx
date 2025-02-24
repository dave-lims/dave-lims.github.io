import styles from "./Home.module.scss";
import { ProjectCard, NavBar } from "../../components";

const Home = () => {
  return (
    <div className={styles.Home}>
      <NavBar />
      <section className={styles.Hero} id="home">
        <header className={styles.Header}>
          <h2>Hello, I&apos;m</h2>
          <h1>David Lim</h1>
        </header>

        <div className={styles.Placeholder}></div>

        <h4 className={styles.Description}>
          I&apos;m a <b>Creative Developer</b>, passionate about creating{" "}
          <b>engaging, human-centered experiences</b>
        </h4>
      </section>

      <section
        className={styles.Projects}
        style={{ height: "100vh" }}
        id="projects"
      >
        <h2>Selected Works</h2>
        <ProjectCard />
      </section>
    </div>
  );
};

export default Home;
