import { Button, Card, ProjectCard, Tag } from "../../components";
import styles from "./Home.module.css";
import minionsImage from "/src/assets/minions.png";
import muted_me from "/src/assets/muted_me_no_bg.png";
import letters from "/src/assets/mobile-letters.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={`glow-ball ${styles.bgBall}`}></div>

      <header className={styles.hero}>
        <Tag className={styles.heroTag} icon="green-dot" text="Open for Work" />

        <div className={styles.heroText}>
          <h1>Hello, I’m David Lim</h1>
          <h2>
            I’m a <b>Software Engineer</b>, passionate about creating engaging,
            human-centered experiences
          </h2>
        </div>

        <div className="flex-row-fit">
          <Button icon="linkedin" link="https://linkedin.com/in/davidlim7391" />
          <Button icon="github" link="https://github.com/dave-lims" />
          <Button icon="resume" />
          <Button icon="email" link="mailto:david.lim@berkeley.edu" />
        </div>
      </header>

      <div className={styles.lettersContainer}>
        <div className={styles.lettersWrapper}>
          <img className={styles.letters} src={letters} />
        </div>
      </div>

      <section className="flex-column">
        <h3>PROJECTS</h3>
        <ProjectCard
          image={minionsImage}
          title="SLNG"
          description="Yeah, I don’t really get skibidi either—but there’s a site that gets it."
          techStacks={["HTML", "CSS"]}
          link="https://dave-lims.github.io/slng_2.0/"
        />
        <ProjectCard
          image={minionsImage}
          title="SLNG"
          description="Yeah, I don’t really get skibidi either—but there’s a site that gets it."
          techStacks={["HTML", "CSS"]}
        />
        <ProjectCard
          image={minionsImage}
          title="SLNG"
          description="Yeah, I don’t really get skibidi either—but there’s a site that gets it."
          techStacks={["HTML", "CSS"]}
        />
      </section>

      <section className="flex-column">
        <h3>OTHER THINGS I&apos;VE WORKED ON</h3>
        <Card
          label="Web Director"
          contactInfo="ASUC SU @ UC Berkeley"
          icon="arrow"
          img="/src/assets/asuc.png"
        />
        <Card
          label="Media Director"
          contactInfo="Codeology @ UC Berkeley"
          icon="arrow"
          img="/src/assets/codeology.svg"
        />
        <Card
          label="Social Media Chair"
          contactInfo="KPG @ UC Berkeley"
          icon="arrow"
          img="/src/assets/kpg.svg"
        />
        <Card
          label="Apparel Design"
          contactInfo="For Various Organizations"
          icon="arrow"
        />
        <Card
          label="Graphic Design"
          contactInfo="My Passion Projects"
          icon="arrow"
        />
      </section>

      <section className="flex-column">
        <h3>CONTACT ME</h3>
        <Card
          label="Send an Email"
          contactInfo="david.lim@berkeley.edu"
          icon="email"
          link="mailto:david.lim@berkeley.edu"
        />
        <Card
          label="LinkedIn"
          contactInfo="linkedin.com/in/davidlim7391"
          icon="linkedin"
          link="https://linkedin.com/in/davidlim7391"
        />
        <Card
          label="GitHub"
          contactInfo="github.com/dave-lims"
          icon="github"
          link="https://github.com/dave-lims"
        />
      </section>

      <footer>
        <img src={muted_me} alt="Illustration of myself" />
        <h4>Thank you for coming by</h4>
        <p>@ 2025 David. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
