import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { ProjectCard, NavBar, IconBtn } from "../../components";
import slng from "../../assets/mock-slng.png";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("home");

  useEffect(() => {
    // ==== Intersection Observer to keep track of which section is currently in view ====
    const options = {
      root: null, // viewport
      rootMargin: "-40% 0px", // center of viewport
      threshold: 0.1, // trigger when 10% of the section is visible
    };
    // call set selected section based on which section in view
    const setSectionInView = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedSection(entry.target.id);
        }
      });
    };

    // Observer setup
    const observer = new IntersectionObserver(setSectionInView, options);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={styles.Home}>
      <NavBar selected={selectedSection} setSelected={setSelectedSection} />
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
        <ProjectCard
          title="SLNG"
          description="Yeah, I don’t really get skibidi either—but there’s a site that gets it."
          mockup={slng}
          techStack={["HTML", "CSS", "JavaScript", "Webpack"]}
          link="https://dave-lims.github.io/slng_2.0/"
          github="https://github.com/dave-lims/slng_2.0"
        />
      </section>

      <section className={styles.Contact} id="contact">
        <div className={styles.contactHeader}>
          <h2>Let&apos;s</h2>
          <h1>Connect</h1>
        </div>
        <IconBtn
          type="button"
          label="david.lim@berkeley.edu"
          icon="paper-plane"
          link="mailto:david.lim@berkeley.edu"
        />
        <IconBtn
          type="link"
          label="LinkedIn"
          icon="linkedin"
          link="https://linkedin.com/in/davidlim7391"
        />
      </section>
    </div>
  );
};

export default Home;
