import React from "react";
import Lottie from 'react-lottie-player'

const Animation = (props) => {

    return (
        <div>
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