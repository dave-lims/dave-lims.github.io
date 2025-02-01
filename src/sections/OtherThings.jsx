import ContactBtn from "../components/ContactBtn";

const OtherThings = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  return (
    <div style={style}>
      <ContactBtn
        label="Web Director"
        contactInfo="ASUC SU @ UC Berkeley"
        icon="arrow"
        img="/src/assets/asuc.png"
      />
      <ContactBtn
        label="Media Director"
        contactInfo="Codeology @ UC Berkeley"
        icon="arrow"
        img="/src/assets/codeology.svg"
      />
      <ContactBtn
        label="Social Media Chair"
        contactInfo="KPG @ UC Berkeley"
        icon="arrow"
        img="/src/assets/kpg.svg"
      />
      <ContactBtn
        label="Apparel Design"
        contactInfo="For Various Organizations"
        icon="arrow"
      />
      <ContactBtn
        label="Graphic Design"
        contactInfo="My Passion Projects"
        icon="arrow"
      />
    </div>
  );
};

export default OtherThings;
