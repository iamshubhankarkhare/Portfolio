import React, { useState } from 'react'
import styles from './Audio.module.css'
import { Howl, Howler } from 'howler';
import para from './Paradigm.mp3'


function Audio() {
    const [isPlaying, setIsPlaying] = useState(true)

    var sound = new Howl({
        src: [para],
        autoplay: false,
        loop: true,
    });
    sound.once('load', () => {
        sound.play();
    });

    Howler.volume(0.5);


    const handleclick = () => {
        if (sound.playing() === false) {
            sound.play()
            sound.fade(0, 1, 2000)
            setIsPlaying(true);
            return
        }
        if (sound.playing()) {
            sound.fade(1, 0, 2000)
            setTimeout(() => { sound.stop() }, 2100)
            setIsPlaying(false)
            return
        }
    }


    return (
        <div className={styles.audioContainer}>
            <button onClick={handleclick} id="musicButton">
                <i className={isPlaying ? `fa fa-music fa-5x ` : `fa fa-play fa-5x `}></i>
            </button>
            <label htmlFor="musicButton"><h3>Paradigm</h3> <h4>Revolt Production Music</h4> </label>
        </div>
    )
}

export default Audio
