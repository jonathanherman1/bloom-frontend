import React from "react";
import Lottie from 'react-lottie-player'

import styles from './Animation.module.css'

const Animation = (props) => {

    return (
        <div className={styles.animation}>
            <Lottie
                className={styles.lottie}
                loop
                animationData={props.animationData}
                play
                speed={0.25}
            />
        </div>
    )
}
export default Animation