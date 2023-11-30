/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import logo from "../Icons/logo.svg"
import menu from "../Icons/menu.svg"
import videos from "../Icons/videos.svg"
import radio from "../Icons/radio.svg"
import Logout from "../Icons/Logout.svg"
import playlist from "../Icons/playlist.svg"
import cancle from "../Icons/cancle.svg"

import home from "../Icons/home.svg"
import profile from "../Icons/profile.svg"
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const [preventOverflow, setPreventOverflow] = useState(false)


    useEffect(() => {
        if (openMenu) {
            // Add the class to the body when the modal is open
            setPreventOverflow(!preventOverflow)
        } else {
            // Remove the class when the modal is closed
            setPreventOverflow(true)
        }

        // Clean up the effect
        return () => {
            setPreventOverflow(true)

        };
    }, [openMenu]);


    const toggleMenu = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }

    // useEffect(() => {
    //     setOpenMenu(false)
    // }, [])


    return (

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

    )
}

export default Navbar