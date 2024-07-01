import React from 'react'
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'
import history from '../../data/history.json'
import Styles from './Experience.module.css'

const Experience = () => {
  return (
    <section className={Styles.container} id='Experience'>
        <h2 className={Styles.title}>Experience</h2>
           <div className={Styles.content} >
            <div className={Styles.skills}>{skills.map((skill,id)=>{
                return <div key={id} className={Styles.skill}>
                    <div className={Styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p >{skill.title}</p>
                    </div>
                
            })
          } </div>
          <ul className={Styles.history}>
            {
                history.map((historyItem,id)=>{
                    return <li key={id} className={Styles.container}>
                        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation}logo`}/>
                        <div className={Styles.historyItemDetails}>
                           <h3>{`${historyItem.role}`},{`${historyItem.organisation}`}</h3> 
                           <p>{`${historyItem.startDate}`}-{`${historyItem.endDate}`}</p>
                        </div>
                        <ul>
                            {historyItem.experiences.map((experience,id)=>{
                                return <li key={id}>{experience}</li>
                            })}
                        </ul>
                    </li>
                })
            }
          </ul>
           </div>
    </section>
  )
}

export default Experience
