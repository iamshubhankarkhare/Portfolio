import React from 'react'
import styles from './Project.module.css'
import Tech from '../../techStack/TechStack'

function Project({ data }) {
    console.log(" poopoo mounted " + Date.now());

    return (
        <div className={styles.container}>
            {data.map((el, i) => (
                <div className={styles.dataWrapper} key={i}>
                    <h1>{el.title}</h1>
                    <h3>{el.Description}</h3>
                    <div className={styles.linkBtns}>
                        <a href={el.links.visit} className={styles.lnk} target="_blank" rel="noopener noreferrer">Visit</a>
                        <a href={el.links.code} className={styles.lnk} target="_blank" rel="noopener noreferrer">Code</a>
                        <a href={el.links.video} className={styles.lnk} target="_blank" rel="noopener noreferrer">Video</a>

                    </div>
                    <div className={styles.techWrapper}>
                        <Tech skills={el.tech} font="small"></Tech>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Project
