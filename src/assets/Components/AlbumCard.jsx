/* eslint-disable no-unused-vars */
import React from 'react'
import more from "/icons/more.svg"
import volume from "/Images/volume.png"
import "./AlbumCard.css"

const AlbumCard = () => {
    return (
        <div className="album-card">

            <div className="album-card-first">
                <img src={volume} alt="" className='album-card-img' />

                <div className="album-card-texts">

                    <h1 className="texts-title">
                        Let me love you ~ Krisx
                    </h1>

                    <p className="texts-status">
                        Single
                    </p>

                </div>
            </div>


            <div className="album-card-more">

                <img src={more} alt="" />

                <p>4:17</p>


            </div>



        </div>
    )
}

export default AlbumCard