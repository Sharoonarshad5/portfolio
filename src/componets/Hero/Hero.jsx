import React from 'react'
import { getImageUrl } from '../../utils'
import Styles from './Hero.module.css';

const Hero = () => {
  return (<section className={Styles.container}>
    <div className={Styles.content}>
     <h1 className={Styles.title}>
        Hi, Im Sharoon
    </h1>   
    <p className={Styles.description}>
       Im a beginner Frontend developer with more then A year of experience using React and NodeJS.
    </p>
    <a className={Styles.contactBtn}
    href="mailto:sharoonarshad5@gmail.com">Contact Me</a>
    </div>
    <img src={getImageUrl("hero/HERO.png")} alt="Image of Me" className={Styles.heroImg} />
    <div className={Styles.topBlur}/>
    <div className={Styles.bottomBlur}/>
  </section>)
}

export default Hero
