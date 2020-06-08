import React, { useState } from 'react'
import styles from './ProjectContainer.module.css'
import Project from './Project/Project'
import data from './assests/mainProjects.json'

function ProjectContainer({ handleClose }) {
    const [activeTab, setActiveTab] = useState('0');
    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
        if (activeTab === tab) {
            setActiveTab('0');
        }

    }

    return (
        <div className={styles.Container}>
            <div className={styles.topbar}>
                <h1>Projects</h1>

                <button className={styles.closebtn} onClick={(e) => handleClose(e)}>X</button>

            </div>
            <div id={(activeTab === '0' ? styles.active : '')} className={styles.content}>
                <Project data={data.projects}></Project>
            </div>
            <div id={(activeTab === '1' ? styles.active : '')} className={styles.content}>
                <h3>mini</h3>
            </div>

            <div className={styles.navButtons}>
                <button onClick={() => toggle('0')} id={(activeTab === '0' ? styles.activeBtn : '')} >Projects</button>
                <button onClick={() => toggle('1')} id={(activeTab === '1' ? styles.activeBtn : '')}>mini Projects</button>

            </div>
        </div>

    )
}

export default ProjectContainer
