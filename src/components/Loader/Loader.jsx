import React, { useState, useEffect } from 'react'
import styles from './Loader.module.css'

export default function Loader() {
    const [isSlow, setisSlow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setisSlow(true)
        }, 3000);
        return () => {
            setisSlow(false)
        }
    }, [])

    return (
        <div className={styles.container} >
            <div className={styles.loader}>
                <span></span>
                <span></span>
            </div>
            {isSlow && <h4>Slow internet detected!</h4>}
        </div>
    )
}
