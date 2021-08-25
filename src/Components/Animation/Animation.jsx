import React, { useEffect } from "react";
import Lottie from 'react-lottie-player'

import styles from './Animation.module.css'

const Animation = (props) => {

    // useEffect(() => {
                
    //     setTimeout(function(){
    //         let animWrap = document.getElementById(‘lottie’);
    //         let anim = animWrap.getElementsByTagName(‘svg’);
    //         anim[0].setAttribute(“preserveAspectRatio”, “none”);
    //         anim[0].style.width = “100vw”;
    //         anim[0].style.height = “100vh”;
    //     }, 500);

    // }, []);

    return (
        <div className={styles.animation}>
            <Lottie
                loop
                animationData={props.animationData}
                play
                speed={1}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    )
}
export default Animation