import React from 'react'
import { getImageUrl } from '../../utils';
import Styles from './ProjectCard.module.css';

const ProjectCard = ({project :{title,imageSrc,description,skills,source}}) => {
  return (
    <div className={Styles.container}>
            <img src={getImageUrl(imageSrc)} 
            alt={`image of ${title}`}className={Styles.image} />
            <h3 className={Styles.title}>{title}</h3>
            <p className={Styles.description}>{description}</p>
            <ul className={Styles.skills}>
              {skills.map((skill, id) => {
                return(
                <li className={Styles.skill} key={id}>{skill}</li>);
              })}
            </ul>
            <div className={Styles.links}>
              <a className={Styles.link} href={source}>Source</a>
            </div>
          </div>
  )
}

export default ProjectCard
