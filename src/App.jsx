// import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import minionsImage from "./assets/minions.png";

function App() {
  return (
    <>
      <header>Hello, I’m David Lim</header>
      <div>
        I’m a <b>Software Engineer</b>, passionate about creating engaging,
        human-centered experiences
      </div>

      <ProjectCard
        image={minionsImage}
        title="SLNG"
        description="Yeah, I don’t really get skibidi either—but there’s a site that gets it."
        techStacks={["HTML", "CSS"]}
      />
    </>
  );
}

export default App;
