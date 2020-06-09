import React, { useState } from 'react'
import styles from './Certi.module.css'
import Fade from 'react-reveal/Fade';


function Certi({ certificates }) {
    const [loadLimit, setLoadLimit] = useState(3)
    var renderCards = () => {
        return certificates.slice(0, loadLimit).map((certi, i) => <div className={styles.itemContainer} key={i}>
            <Fade duration={2000}>
                <img src={certi.image} alt={`img${i}`}></img>
                <div className={styles.certiData}>
                    <h3>{certi.title}</h3>
                    <h5>{certi.from}</h5>
                    <a href={certi.credential}>See credential</a>
                </div>
            </Fade>
        </div>)
    }

    return (
        <div className={styles.container}>
            {renderCards()}
            <div className={styles.loadButton}>
                {(loadLimit < certificates.length ? (<button onClick={() => setLoadLimit(loadLimit + 3)}> Show more </button>) : null)}
            </div>

        </div>
    )
}

export default Certi
