import me from "../assets/me.svg";

const Footer = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: 0.3,
  };

  // const color = { color: "var(--muted-blue)" };

  return (
    <div style={style}>
      <img src={me} alt="Illustration of myself" style={{ maxWidth: "3em" }} />
      <h3>Thank you for coming by</h3>
      <p>@ 2025 David. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
