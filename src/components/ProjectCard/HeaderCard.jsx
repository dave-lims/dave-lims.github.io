import styles from "./HeaderCard.module.scss";
import PropTypes from "prop-types";

const HeaderCard = ({ imgs }) => {
  // **********
  // Rendering images
  // -- len 1: a flat phone image
  // -- len 2: [phone mock, logo] == logo on left (above), phone on right
  // **********
  const renderImages = (imgs) => {
    if (!Array.isArray(imgs)) {
      return <img className={styles.mockup__img} src={imgs} alt="" />;
    } else {
      return (
        <>
          <img className={styles.mockup__me} src={imgs[0]} alt="Welcome" />
          <img
            className={styles.mockup__asset}
            src={imgs[1]}
            alt="I'm David!"
          />
        </>
      );
    }
  };

  return (
    <div className={`${styles.projectCard} ${styles.HeaderCard}`}>
      <div className={styles.mockup}>
        <div className={styles.mockup__background}></div>
        {renderImages(imgs)}
      </div>
    </div>
  );
};

HeaderCard.propTypes = {
  imgs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default HeaderCard;
