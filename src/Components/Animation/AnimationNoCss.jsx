import React from "react";
import Lottie from 'react-lottie-player'

const AnimationNoCss = (props) => {

    return (
        <div>
            <Lottie
                loop
                animationData={props.animData}
                play
                speed={0.5}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    )
}
export default AnimationNoCss