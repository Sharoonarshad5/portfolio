import React from 'react'
import { getImageUrl } from '../../utils'
import Styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id='contacts' className={Styles.container}>
        <div className={Styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to reach out!</p> 
        </div>
        <ul className={Styles.links}>
            <li className={Styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="MYemail@email.com">sharoonarshad5@gmail.com</a>
            </li>
            <li className={Styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
                <a href="https://github.com/Sharoonarshad5">github.com/Sharoonarshad5</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
