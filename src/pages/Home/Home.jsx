import { Button, Card, ProjectCard, Tag } from "../../components";
import styles from "./Home.module.css";
import minionsImage from "/src/assets/minions.png";
import me from "/src/assets/me.svg";
import letters from "/src/assets/mobile-letters.png";

const Home = () => {
  return (
    <div className={styles.home}>
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
          <Button icon="linkedin" />
          <Button icon="github" />
          <Button icon="resume" />
          <Button icon="email" />
        </div>

        <div className={styles.lettersContainer}>
          <div className={styles.lettersWrapper}>
            <img className={styles.letters} src={letters} />
          </div>
        </div>
      </header>

      <div className="flex-column">
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
      </div>

      <div className="flex-column">
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
      </div>

      <div className="flex-column">
        <Card
          label="Send an Email"
          contactInfo="david.lim@berkeley.edu"
          icon="email"
        />
        <Card
          label="LinkedIn"
          contactInfo="linkedin.com/in/davidlim7391"
          icon="linkedin"
        />
        <Card label="GitHub" contactInfo="github.com/dave-lims" icon="github" />
      </div>

      <footer className="flex-column">
        <img src={me} alt="Illustration of myself" />
        <h3>Thank you for coming by</h3>
        <p>@ 2025 David. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
