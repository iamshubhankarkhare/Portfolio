import React, { memo } from 'react'
import styles from './Intro.module.css'

function Intro() {
    console.log("untro mounted " + Date.now());


    return (
        <div className={styles.container}>
            <h1> Hi, I'm <br />Shubhankar</h1>
            <span>A full stack developer</span>

        </div>
    )
}

export default memo(Intro)
