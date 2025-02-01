import ContactBtn from "../components/ContactBtn";

const Contacts = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  return (
    <div style={style}>
      <ContactBtn
        label="Send an Email"
        contactInfo="david.lim@berkeley.edu"
        icon="email"
      />
      <ContactBtn
        label="LinkedIn"
        contactInfo="linkedin.com/in/davidlim7391"
        icon="linkedin"
      />
      <ContactBtn
        label="GitHub"
        contactInfo="github.com/dave-lims"
        icon="github"
      />
    </div>
  );
};

export default Contacts;
