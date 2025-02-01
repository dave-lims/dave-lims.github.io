import ProjectCard from "../components/ProjectCard";
import minionsImage from "../assets/minions.png";

const Projects = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  return (
    <div style={style}>
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
      <ProjectCard
        image={minionsImage}
        title="SLNG"
        description="Yeah, I don’t really get skibidi either—but there’s a site that gets it."
        techStacks={["HTML", "CSS"]}
      />
    </div>
  );
};

export default Projects;
