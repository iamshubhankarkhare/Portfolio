import React, { useState } from 'react'
import styles from './Certi.module.css'

function Certi({ certificates }) {
    console.log(certificates);
    const [loadLimit, setLoadLimit] = useState(3)
    var renderCards = () => {
        return certificates.slice(0, loadLimit).map((certi, i) => <div className={styles.itemContainer} key={i}>
            <img src={certi.image} alt={`img${i}`}></img>
            <div className={styles.certiData}>
                <h3>{certi.title}</h3>
                <h5>{certi.from}</h5>
                <a href={certi.credential}>See credential</a>
            </div>
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
