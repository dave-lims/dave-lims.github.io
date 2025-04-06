// import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { ProjectCard, NavBar, IconBtn } from "../../components";
import slng from "../../assets/mock-slng.png";
import useSectionNavigation from "../../hooks/useSectionNavigation";

const Home = () => {
  const { selectedSection, navigateToSection } = useSectionNavigation();

  return (
    <div className={styles.Home}>
      <NavBar
        selected={selectedSection}
        navigateToSection={navigateToSection}
      />
      <section className={styles.Hero} id="home">
        <header className={styles.Header}>
          <h2>Hello, I&apos;m</h2>
          <h1>David Lim</h1>
        </header>

        {/* <div className={styles.Placeholder}></div> */}

        <h4 className={styles.Description}>
          I&apos;m a <b>Creative Developer</b>, passionate about creating{" "}
          <b>engaging, human-centered experiences</b>
        </h4>
      </section>

      <section className={styles.Projects} id="projects">
        <h2>Selected Works</h2>
        <div className={styles.ProjectCards}>
          <ProjectCard
            title="Pabit"
            description="AI-powered English learning app for Koreans, using TV and YouTube clips to teach real phrases."
            mockup={slng}
            link="https://pabit.app/"
          />

          <ProjectCard
            title="SLNG"
            description="Yeah, I don't really get skibidi either—but there's a site that gets it."
            mockup={slng}
            techStack={["html", "css", "js", "webpack"]}
            link="https://dave-lims.github.io/slng_2.0/"
            github="https://github.com/dave-lims/slng_2.0"
          />

          <ProjectCard
            title="Your Recipe Generator"
            description="Throw in what you've got, and we'll turn it into a meal you'll love."
            mockup={slng}
            techStack={["html", "css", "js", "webpack"]}
          />
        </div>
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
        <div className={styles.contactBtns}>
          <IconBtn
            type="link"
            label="Resume"
            icon="file"
            link="https://drive.google.com/file/d/1JvbxrKsoNlPYzini2RxWsRZbWgd9Dxjc/view?usp=sharing"
          />
          <IconBtn
            type="link"
            label="LinkedIn"
            icon={["fab", "linkedin"]}
            link="https://linkedin.com/in/davidlim7391"
          />
          <IconBtn
            type="link"
            label="GitHub"
            icon={["fab", "github"]}
            link="https://github.com/dave-lims"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
