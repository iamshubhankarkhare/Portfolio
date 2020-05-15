import React, { useState } from 'react'
import styles from "./NavComp.module.css";
// import Intro from '../Intro/Intro'

function NavComp() {
    const [activeTab, setActiveTab] = useState('0');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
        if (activeTab === tab) setActiveTab('0')
    }

    return (
        <div className={styles.navContainer}>
            {/* <div id={(activeTab === '0' ? styles.active : '')} className={styles.content}>
                <Intro></Intro>
            </div> */}
            <div id={(activeTab === '1' ? styles.active : '')} className={styles.content}>
                <p>about stuff jhghjghjghjgjhghjghjg</p>

            </div>
            <div id={(activeTab === '2' ? styles.active : '')} className={styles.content}>
                <p>project stuff jhghjghjghjgjhghjghjg</p>
            </div>
            <div id={(activeTab === '3' ? styles.active : '')} className={styles.content}>
                <p>contact stuff jhghjghjghjgjhghjghjg {activeTab}</p>
            </div>
            <div className={styles.navButtons}>
                <button onClick={() => { toggle('1'); }}>About me</button>
                <button onClick={() => { toggle('2'); }}>Projects</button>
                <button onClick={() => { toggle('3'); }}>Contact</button>

            </div>




        </div >
    )
}

export default NavComp
