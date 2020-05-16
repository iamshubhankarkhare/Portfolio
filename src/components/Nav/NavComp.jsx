import React, { useState } from 'react'
import styles from "./NavComp.module.css";
import Intro from '../Intro/Intro'
import About from '../About/About'

function NavComp() {
    const [activeTab, setActiveTab] = useState('0');
    const [hideNav, setHideNav] = useState(false)

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
            setHideNav(true)
        }
        if (activeTab === tab) {
            setActiveTab('0');
            setHideNav(false)
        }

    }
    const handleClose = (e) => {
        console.log("pressed");
        if (e) {
            setActiveTab('0')
            setHideNav(false)
        }
    }

    return (
        <div className={styles.navContainer}>
            <div id={(activeTab === '0' ? styles.active : '')} className={styles.content}>
                <Intro></Intro>
            </div>
            <div id={(activeTab === '1' ? styles.active : '')} className={styles.content}>
                <About handleClose={handleClose}></About>

            </div>
            <div id={(activeTab === '2' ? styles.active : '')} className={styles.content}>
                <p>project stuff jhghjghjghjgjhghjghjg</p>
            </div>
            <div id={(activeTab === '3' ? styles.active : '')} className={styles.content}>
                <p>contact stuff jhghjghjghjgjhghjghjg {activeTab}</p>
            </div>
            <div className={`${styles.navButtons} ${hideNav ? styles.hide : ''}`}>
                <button onClick={() => { toggle('1'); }}>About me</button>
                <button onClick={() => { toggle('2'); }}>Projects</button>
                <button onClick={() => { toggle('3'); }}>Contact</button>

            </div>




        </div>
    )
}

export default NavComp
