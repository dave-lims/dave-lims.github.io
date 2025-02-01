import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ image, title, description, techStacks }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.card}>
        <img src={image} alt={`Mockup Image for ${title}`} />
      </div>

      <div className={styles.overlay}>
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{description}</p>

          <div className={styles.cardFooter}>
            <div className={styles.techStack}>
              {techStacks.map((tech, index) => (
                <p key={index} className={styles.techStackItem}>
                  {tech}
                </p>
              ))}
            </div>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="lg"
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </div>

    /* <div style={{width: '100%', height: '100%', position: 'relative'}}>
<div style={{width: 264, height: 304, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 16, border: '1px #EAEAEA solid'}} />
<div style={{width: 248, height: 262, left: 8, top: 8, position: 'absolute', opacity: 0.33, background: '#EAEAEA', borderRadius: 12}} />
<div style={{width: 264, height: 301, left: 0, top: 0, position: 'absolute'}}>
    <div style={{width: 264, height: 301, left: 0, top: 0, position: 'absolute', background: '#212121', borderRadius: 16}} />
    <img style={{width: 203, height: 243, left: 29, top: 25, position: 'absolute', borderRadius: 7.60}} src="https://via.placeholder.com/203x243" />
    <img style={{width: 81.39, height: 37.06, left: 51.47, top: 25, position: 'absolute', transform: 'rotate(14.25deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/81x37" />
</div>
<div style={{width: 264, height: 304, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(191deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 34%, rgba(255, 255, 255, 0.90) 62%, white 68%)', borderRadius: 16, border: '1px #EAEAEA solid'}} />
<div style={{width: 247, height: 106, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, left: 8, top: 190, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', color: 'black', fontSize: 14, fontFamily: 'Manrope', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word'}}>SLNG</div>
    <div style={{alignSelf: 'stretch', color: '#4F4F4F', fontSize: 12, fontFamily: 'Manrope', fontWeight: '500', lineHeight: 18, wordWrap: 'break-word'}}>Yeah, I don’t really get skibidi either—<br/>but there’s a site that gets it.</div>
    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, background: '#F9FDFF', borderRadius: 8, border: '0.20px #C9E4FF solid', justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex'}}>
                <div style={{color: '#3FACFF', fontSize: 10, fontFamily: 'Manrope', fontWeight: '600', lineHeight: 10, wordWrap: 'break-word'}}>HTML</div>
            </div>
            <divs style={{paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, background: '#F9FDFF', borderRadius: 8, border: '0.20px #C9E4FF solid', justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex'}}>
                <div style={{color: '#3FACFF', fontSize: 10, fontFamily: 'Manrope', fontWeight: '600', lineHeight: 10, wordWrap: 'break-word'}}>CSS</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, background: '#F9FDFF', borderRadius: 8, border: '0.20px #C9E4FF solid', justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex'}}>
                <div style={{color: '#3FACFF', fontSize: 10, fontFamily: 'Manrope', fontWeight: '600', lineHeight: 10, wordWrap: 'break-word'}}>Javascript</div>
            </div>
        </div>
        <div style={{width: 24, height: 24, position: 'relative'}}>
            <div style={{width: 14, height: 11.97, left: 2.82, top: 12.72, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', border: '2px #CCCCCC solid'}}></div>
        </div>
    </div>
</div>
</div> */
  );
};

// Define the expected types of the props
ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  techStacks: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
