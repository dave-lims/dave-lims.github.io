import Card from "../components/Card";

const Contacts = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  return (
    <div style={style}>
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
  );
};

export default Contacts;
