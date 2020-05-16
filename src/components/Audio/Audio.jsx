import React from 'react'
import styles from './Audio.module.css'
import { Howl, Howler } from 'howler';
import para from './Paradigm.mp3'


function Audio() {

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
            return
        }
        if (sound.playing()) {
            sound.fade(1, 0, 2000)
            setTimeout(() => { sound.stop() }, 2100)
            return
        }
    }


    return (
        <div className={styles.audioContainer}>
            <button onClick={handleclick}> Mute</button>

        </div>
    )
}

export default Audio
