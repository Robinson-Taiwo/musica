/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import volume from "/Images/volume.png"
import yellowHeart from "../Icons/heart.svg"


const SlideCard = ({image}) => {
    return (
        <div className="chart-slide">

            <div className="chart-slide-one">
                <img src={image} alt="" className="volumePng" />

                <div className="heart-circle">
                    <img src={yellowHeart} alt="" className="yellow-heart" />
                </div>

            </div>


            <p className="slide-title">
                Golden age of 80s
            </p>


            <p className="slide-artist">
                Sean swadder
            </p>


            <div className="slide-time">
                2:34:45
            </div>

        </div>
    )
}

export default SlideCard