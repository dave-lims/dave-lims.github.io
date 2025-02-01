import Card from "../components/Card";

const OtherThings = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  return (
    <div style={style}>
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
  );
};

export default OtherThings;
