import React from 'react'
import '../../assets/CSS/webCSS/index.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer >
            <div className="container-fluid mt-5 footer mt-5">
                <div className="row mt-5 justify-content-center ">
                    <div className="col-md-3  border-right">
                        <Link to="#" className="navbar-brand ">
                            <div className="footer-logo mb-3">
                                <img src={require(`../../assets/images/webiamges/my discount 222.png`)}
                                    alt="Logo"
                                    className="img-fluid" />
                            </div>
                        </Link>
                        <h5 className="fw-bolder">Follow us on:</h5>
                        <div className="my-4">
                            <Link className="link-body-emphasis ms-2" to="#"><img
                                src={require(`../../assets/images/webiamges/facebook 1.png`)}
                                className="bi" width="24"
                                height="24" /></Link>
                            <Link className="link-body-emphasis ml-2 ms-2" to="#"><img
                                src={require(`../../assets/images/webiamges/twitter 1.png`)}
                                className="bi" width="24"
                                height="24" /></Link>
                            <Link className="link-body-emphasis ml-2 ms-2" to="#"><img
                                src={require(`../../assets/images/webiamges/youtube 1.png`)}
                                className="bi" width="24"
                                height="24" /></Link>
                        </div>
                        <hr className="hr1" />
                        <h5 className="fw-bolder">Contact us:</h5>
                        <Link to="#"
                            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none my-2 mt-3"
                            id="contact"><img
                                src={require(`../../assets/images/webiamges/phone-call 1.png`)}
                                alt /><span className="ml-2 text-white ms-2">+92123456789</span>
                        </Link>
                        <Link to="#"
                            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none my-2 mt-4"
                            id="contact"><img
                                src={require(`../../assets/images/webiamges/placeholder 1.png`)}
                                alt="" /><span
                                    className="ml-2 text-white ms-2">Near Sedrtg 32 bdew nhfr vf</span>
                        </Link>
                        <Link to="#"
                            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none my-2 mt-4"
                            id="contact"><img
                                src={require(`../../assets/images/webiamges/email 1.png`)} alt="email icon" /><span
                                    className="ml-2 text-white ms-2">Email@gmail.com</span>
                        </Link>
                    </div>
                    <div className="col-md-3 mb-3 border-right">
                        <h5 className="fw-bolder">About US</h5>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur nostrum fugiat dignissimos aut non,
                            accusamus tenetur cumque rerum dolor ipsam perspiciatis,
                            voluptas placeat ullam modi aliquam nesciunt totam
                            dolorem ducimus.
                        </p>
                    </div>
                    <div className="col-md-3  mb-3">
                        <form>
                            <h5 className="fw-bolder">Subscribe us:</h5>
                            <div className="flex-column flex-sm-row w-100 gap-2 my-4">
                                <label htmlFor="newsletter1" className="visually-hidden ">Email
                                    address</label>
                                <input id="newsletter1 " type="text"
                                    className="form-control custom-input w-100" placeholder="Email" />

                                <button className="btn btn-primary my-4" id="ftbtn" type="button">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex flex-column flex-sm-row justify-content-end">
                        <p>© 2023 Copyright <span className="yello">MyDiscount.</span> All
                            rights reserved</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
