import React from 'react'
import '../../assets/CSS/webCSS/index.css'
import WebNav from 'src/____nav'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="container-fluid bgc ">
            <div className="container">
                <header
                    className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link href="#"
                        className="d-flex align-items-center text-white  mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        For Help: +92123456789
                    </Link>
                    <ul className="nav nav-pills">

                        <li className="nav-item border-right"><Link href="./pages/aboutus.html"
                            className="nav-link" id="nav-link">About Us</Link></li>
                        <li className="nav-item"><Link href="./pages/contactus.html"
                            className="nav-link" id="nav-link">Contact Us</Link></li>
                    </ul>
                </header>

                <div
                    className="row featurette d-flex justify-content-center align-items-center"
                    id="row001">
                    <div className="col-2">
                        <Link href="#" className="navbar-brand">
                            <img
                             src={require(`../../assets/images/webiamges/mydiscouLogo.png`)}
                                alt="Logo"
                                className="img-fluid" />
                        </Link>

                    </div>
                    <div className="col-5 col-md-5">
                        <div className="row ">
                            <div className="col-5 col-md-5">

                                <div className="backel1 img-fluid">
                                    <h className="text-center w-75">CHOOSE YOUR CITY</h>
                                </div>

                            </div>
                            <div className="col-5 ">
                                <img
                                    src={require(`../../assets/images/webiamges/Vector 1.png`)}
                                    alt className="img-fluid" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12">
                                <select className="form-select lhr" id="form-select01"
                                    aria-label="Default select example">
                                    <option selected>Karachi</option>
                                    <option selected>Multan</option>
                                    <option selected>Lahore</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-md-4">
                                <img
                                    src={require(`../../assets/images/webiamges/Vector 2.png`)}
                                    alt className="vec2" />
                            </div>
                            <div className="col-4 col-md-4">
                                <div className="backel2 img-fluid">
                                    <h className="text-center w-75">FOR BETTER EXPERIENCE</h>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 ">
                        <img
                            src={require(`../../assets/images/webiamges/shop.png`)}
                            className="img-fluid" alt="img1" />
                    </div>
                </div>

            </div>
            <hr />
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center">
                    <div className="col-12 col-md-12 col-sm-12">
                        <ul
                            className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li className='d-flex'>
                                    {
                                        WebNav.map((nav, index) => {
                                            return (
                                             <li key={index+1}>
                                                <Link to={nav.to} className="nav-link text-white">
                                                    <h6 className='text-center'>{nav.img}</h6>
                                                    <p className='text-center navbar-text'>{nav.name}</p>
                                                </Link>
                                                </li>
                                            )
                                        })}                              
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
