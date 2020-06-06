import React from 'react'
import styles from './About.module.css'
import TechStack from '../techStack/TechStack'
import Certi from './Certi/Certi'
import FCC from './assests/0.jpeg'
import udemy from './assests/udemy.jpg'




function About({ handleClose }) {
    const skills = ['javascript', 'HTML', 'CSS', 'React', 'Redux', 'UI/UX', 'Node JS', 'Mongo Db', 'jquery', 'bootstrap', 'sass', 'webgl', 'sql', 'JSON', 'django', 'figma', 'Adobe Xd', 'JAVA', 'C++']
    const certificates = [{ title: "APIs and Microservices", from: 'freeCodeCamp', credential: "bull", image: FCC },
    { title: "JavaScript Algorithms and Data Structures", from: 'freeCodeCamp', credential: "bull", image: FCC },
    { title: "Responsive Web Design", from: 'freeCodeCamp', credential: "bull", image: FCC },
    { title: "React and Redux", from: 'Udemy', credential: "bull", image: udemy },
    { title: "Javascript Essentials for Beginners", from: 'Udemy', credential: "bull", image: udemy },
    { title: "Node JS API Development for Beginners", from: 'Udemy', credential: "bull", image: udemy },
    ]


    return (
        <div className={styles.aboutContainer}>
            <button className={styles.closebtn} onClick={(e) => handleClose(e)}>X</button>
            <div className={styles.imgDiv}></div>
            <div className={styles.para}>
                Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

                It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

                It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

                Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .
            </div>
            <h1> Skills:</h1>
            <div className={styles.skills}>
                <TechStack skills={skills}></TechStack>
            </div>
            <h1> Achievements and certificates:</h1>
            <div className={styles.certi}>
                <Certi certificates={certificates}></Certi>

            </div>



        </div>
    )
}

export default About
