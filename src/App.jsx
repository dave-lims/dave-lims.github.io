import me from "./assets/me.svg";

function App() {
  return (
    <>
      <img src={me} alt="Illustration of myself"></img>

      <header>Hello, I’m David Lim</header>
      <div>
        I’m a Software Engineer, passionate about creating engaging,
        human-centered experiences.
      </div>

      <br />

      <p>
        🚧 <br /> This site is currently under development. <br /> Please check
        back later and get excited for changes that are coming!
      </p>

      <br />

      <p style={{ fontSize: "0.75rem" }}>@ 2025 David. All Rights Reserved.</p>
    </>
  );
}

export default App;
