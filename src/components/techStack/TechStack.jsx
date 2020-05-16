import React from 'react'
import styles from './TechStack.module.css'

function techStack({ skills }) {


    return (
        <div className={styles.container}>
            {skills.map((skill, i) => <h3 key={i}>{skill}</h3>)}
        </div>
    )
}

export default techStack
