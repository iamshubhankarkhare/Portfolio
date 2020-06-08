import React, { useRef } from 'react'
import styles from './About.module.css'
import TechStack from '../techStack/TechStack'
import Certi from './Certi/Certi'
import FCC from './assests/0.jpeg'
import udemy from './assests/udemy.jpg'




function About({ handleClose }) {
    const paraRef = useRef(null)








    const skills = ['javascript', 'HTML', 'CSS', 'React', 'Redux', 'Gatsy', 'UI/UX', 'Node JS', 'Mongo Db', 'jquery', 'bootstrap', 'sass', 'webgl', 'sql', 'JSON', 'django', 'figma', 'Adobe Xd', 'JAVA', 'C++']
    const certificates = [{ title: "APIs and Microservices", from: 'freeCodeCamp', credential: "bull", image: FCC },
    { title: "JavaScript Algorithms and Data Structures", from: 'freeCodeCamp', credential: "bull", image: FCC },
    { title: "Responsive Web Design", from: 'freeCodeCamp', credential: "bull", image: FCC },
    { title: "React and Redux", from: 'Udemy', credential: "bull", image: udemy },
    { title: "Javascript Essentials for Beginners", from: 'Udemy', credential: "bull", image: udemy },
    { title: "Node JS API Development for Beginners", from: 'Udemy', credential: "bull", image: udemy },
    ]


    return (
        <div className={styles.aboutContainer} >
            <button className={styles.closebtn} onClick={(e) => handleClose(e)}>X</button>
            <div className={styles.imgDiv}></div>
            <div className={styles.para} ref={paraRef}>
                I love space (no kidding). I am a full stack(MERN) developer shaping websites, garnishing them with animations and intriguing features.
                Coupled with this , I'm very passionate about UI/UX designing.
                Currently pursuiing a degree in B.Tech, CSE, I have always been an eager learner, enthralled by technology , I've been enganging myself in a variety of projects.
                Eagerly anticipating an opportunity to myself into a better developer as well as striving to raise the standards of the entire community.
            </div>
            <h1> Skills:</h1>
            <div className={styles.skills}>
                <TechStack skills={skills} font="big"></TechStack>
            </div>
            <h1> Achievements and certificates:</h1>
            <div className={styles.certi}>
                <Certi certificates={certificates}></Certi>

            </div>



        </div>
    )
}

export default About
