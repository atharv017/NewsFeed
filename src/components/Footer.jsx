import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { SearchContext } from '../context/SearchContext';
import { Link } from 'react-router-dom';
import { FaWpexplorer } from "react-icons/fa6";
import { TbCategory2 } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

function Footer() {

    const { state } = useContext(ThemeContext);
    const { setSearchValue } = useContext(SearchContext);

    return (
        <>
            <div className='p-3' style={{ backgroundColor: state.theme == 'light' ? "#eeebda" : "#282b4a", color: state.theme == 'light' ? "#282b4a" : "#eeebda" }}>
                <div className='container rounded-3' style={{ border: state.theme == 'light' ? "2px solid #282b4a" : "2px solid #eeebda" }}>

                    <div className='row p-4 d-flex justify-content-center  '>
                        <div className='col-xl-6 col-md-4 col-sm-12 text-center '>
                            <img src='src\assets\newspaper_PNG34.png' height={"195px"} />
                            <p>Discover the latest news, trending stories, and insights that matter to you.</p>
                        </div>

                        <div className='col-xl-3 col-md-4 col-sm-12 '>
                            <h3>Expl<FaWpexplorer />re</h3>
                            <ul className="navbar-nav m-auto  mb-2 mb-lg-0 ">
                                <li className="nav-item ">
                                    <Link to="/" className='nav-link'>Home</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/" className='nav-link'>Latest News</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/" className='nav-link'>Trending Stories</Link>
                                </li>


                            </ul>
                        </div>
                        <div className='col-xl-3 col-md-4 col-sm-12 '>
                            <h3><TbCategory2 />Categories</h3>
                            <ul className="navbar-nav m-auto  mb-2 mb-lg-0 ">
                                <li className="nav-item  ">
                                    <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="sports" onClick={(e) => setSearchValue(e.target.value)}>Sports</button>
                                </li>
                                <li className="nav-item  ">
                                    <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="business" onClick={(e) => setSearchValue(e.target.value)}>Business</button>
                                </li>
                                <li className="nav-item  ">
                                    <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="health" onClick={(e) => setSearchValue(e.target.value)}>Health</button>
                                </li>
                                <li className="nav-item ">
                                    <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="technology" onClick={(e) => setSearchValue(e.target.value)}>Technology</button>
                                </li>
                                <li className="nav-item  ">
                                    <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="entertainment" onClick={(e) => setSearchValue(e.target.value)}>Entertainment</button>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div className='container mt-1 p-2 mb-1'>
                    <div className='row text-end'>
                        <div className='col-xl-6 col-md-6 col-sm-12'>
                            <div className='d-flex'>

                                <Link className='nav-link' to="#"><SlSocialInstagram style={{ width: "50px", height: "25px" }} /></Link>
                                <Link className='nav-link' to="#"><SlSocialLinkedin style={{ width: "50px", height: "25px" }} /></Link>
                                <Link className='nav-link' to="#"><SlSocialYoutube style={{ width: "50px", height: "25px" }} /></Link>
                                <Link className='nav-link' to="#"><SlSocialGithub style={{ width: "50px", height: "25px" }} /></Link>
                            </div>
                        </div>
                        <div className='col-xl-6 col-md-6 col-sm-12 mt-2'>
                            <p className='lead fs-6'>© 2026 NewsFeed. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
