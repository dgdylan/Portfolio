import React from "react";
import gradientOne from "./images/gradientOne.png"
import gradientThree from "./images/gradientThree.png"
import video from "./images/video.mp4"

const Hero = () => {
    return (
        <div className="hero">
            <div className="gradientThree">
                <img src={gradientThree} draggable="false" alt="" />
            </div>
            <div className="hero-text">
                Development,
                <br />
                one <span className="hero-span">wave</span> at a
                <br />
                time.
                <br />
                <a className="resume-btn" href="#">View my Resume</a>
            </div>
            <div className="gradientOne">
                <img src={gradientOne} draggable="false" alt="" />
            </div>

            <video loop muted autoPlay preload="auto">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Hero
