/* eslint-disable no-unused-vars */
import React from 'react'
import charlead from "/Images/chartLead.png"
import heart from "/icons/heart.svg"
import play from "/icons/play.svg"
import music from "/icons/music.svg"
import more from "/icons/more.svg"
// import AlbumCard from "/Images/volume.png"
import "./Album.css"
import Navbar from './Navbar'
import AlbumCard from './AlbumCard'

const Album = () => {
    return (
        <div className='Album-container' >
            <div>
                <Navbar />
            </div>

            <div className="album-body">

                <img src={charlead} alt="" className="chart-lead" />

                <h1 className="album-body-heading">
                    Tomorrow’s tunes
                </h1>

                <p className="album-body-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                </p>

                <p className="album-body-songs">
                    64 songs ~ 16 hrs+
                </p>


                <div className="album-actions">

                    <div className="album-icons">

                        <img src={play} alt="" className="album-icon" />

                        <p>Play all</p>

                    </div>

                    <div className="album-icons">

                        <img src={music} alt="" className="album-icon" />

                        <p>Add to collection</p>

                    </div>

                    <div className="album-icons">


                        <img src={heart} alt="" className="album-icon" />

                        <p>Like</p>

                    </div>



                </div>

                <div className="album-cards-container">

               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>
               <AlbumCard/>

                </div>




            </div>


        </div>
    )
}

export default Album