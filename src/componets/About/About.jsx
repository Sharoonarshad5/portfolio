import React from 'react'
import { getImageUrl } from "../../utils";
import Styles from "./About.module.css";

const About = () => {
  return (
    <section className={Styles.container} id='about'>
        <h2 className={Styles.title}>About</h2>
        <div className={Styles.content}>
            <img src={getImageUrl("about/boy.png")} alt="Me  with a laptop" className={Styles.aboutImage}/>
            <ul className={Styles.aboutItems}>
              <li className={Styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={Styles.aboutItemText}>
                  <h3>Frontend Developer</h3>
                  <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
                </div>
              </li>
              <li className={Styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={Styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                I have some experience developing fast and optimised back-end systems
                and APIs
              </p>
              </div>
              </li>
              <li className={Styles.aboutItem}>
              <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
              <div className={Styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed few landing pages and have created design
                systems as well
              </p>
              </div>
              </li>
            </ul>
        </div>
     </section>
  )
}

export default About
