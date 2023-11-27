/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import logo from "../Icons/logo.svg"
import menu from "../Icons/menu.svg"
import videos from "../Icons/videos.svg"
import radio from "../Icons/radio.svg"
import Logout from "../Icons/Logout.svg"
import playlist from "../Icons/playlist.svg"
import home from "../Icons/home.svg"
import profile from "../Icons/profile.svg"
import frame from "/Images/frame4.png"
import volume from "/Images/volume.png"
import season from "/Images/seasons.png"
import AlbumCard from "/Images/AlbumCard.png"
import whiteHeart from "../Icons/white-heart.svg"
import yellowHeart from "../Icons/heart.svg"
import circle from "../Icons/circle.svg"
import curl from "../Icons/white-curl.svg"
import cancle from "../Icons/cancle.svg"
import data from "./data"
import chartcard from "/Images/chartcard.png"
import play from "../Icons/play.svg"
import next from "../Icons/next.svg"


import "./Home.css"
import { Link } from 'react-router-dom'
import SlideCard from './SlideCard'

const Home = () => {


    const [openMenu, setOpenMenu] = useState(false)


    const toggleMenu = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }

    // useEffect(() => {
    //     setOpenMenu(false)
    // }, [])


    return (
        <>

            <div className="home-container">

                <div className="home-navbar">

                    <img src={logo} alt="" className="nav-logo" />


                    <aside className={openMenu ? "nav-links" : "hidden-text"}>

                        <div className="links">

                            <div className="link">

                                <img src={home} alt="" className="nav-icons" />

                                <Link to="/">

                                    Home
                                </Link>
                            </div>

                            <div className="link">

                                <img src={playlist} alt="" className="nav-icons" />

                                <p>

                                    My collections
                                </p>
                            </div>

                            <div className="link">

                                <img src={radio} alt="" className="nav-icons" />

                                <p>

                                    Radio
                                </p>
                            </div>

                            <div className="link">

                                <img src={videos} alt="" className="nav-icons" />

                                <p>

                                    Music videos
                                </p>
                            </div>
                            <div className="link">

                                <img src={profile} alt="" className="nav-icons" />

                                <p>

                                    Profile
                                </p>
                            </div>

                            <div className="link">

                                <img src={Logout} alt="" className="nav-icons" />

                                <p>

                                    Log out
                                </p>
                            </div>




                        </div>

                        <div className="x-links">

                            <img src={cancle} onClick={toggleMenu} alt="" className="cancle-links" />
                        </div>




                    </aside>

                    <div className="menus">

                        <img src={menu} alt="" onClick={toggleMenu} className={!openMenu ? "nav-menu-bar" : "flext"} />

                    </div>



                </div>



                <div className="curated-list">

                    <div className="sky-blue">

                        <img src={curl} alt="" className="curl" />

                        <p className="curated-text">
                            Curated playlist
                        </p>



                        <div className="curated-second">

                            <h1>
                                R & B Hits
                            </h1>

                            <p>
                                All mine, Lie again, Petty call me everyday,
                                Out of time, No love, Bad habit,
                                and so much more
                            </p>


                            <div className="frames">
                                <img src={frame} alt="" className="framefour" />

                                <img src={whiteHeart} alt="" className="frameheart" />

                                <p className="frames-text">
                                    33k Likes
                                </p>

                            </div>

                        </div>


                    </div>



                </div>


                <div className="top-charts">

                    <h1>Top charts</h1>


                    <div className="chart-slides">


                        <SlideCard image={volume} />

                        <SlideCard image={season} />

                        <SlideCard image={season} />

                        <SlideCard image={volume} />
                    </div>

                    <section className="new-release">

                        <div className="new-release-head">
                            New releases.
                        </div>

                        <div className=
                            "new-releases">

                            {data.map((item, index) => (

                                <div key={index} className="album-card">


                                    <img src={item.url} alt="" />
                                </div>



                            ))}


                        </div>

                    </section>




                </div>
                <section className="footer">


                    <div className="footer-content">
                        <div className="footer-desc">

                            <img src={season} alt="" />

                            <div className="footer-desc-texts">
                                <h1>Seasons in</h1>

                                <p>James</p>
                            </div>

                        </div>


                        <div className="footer-controls">
                            <img src={play} alt="" />

                            <img src={next} alt="" />



                        </div>

                    </div>


                </section>


            </div>

        </>
    )
}

export default Home