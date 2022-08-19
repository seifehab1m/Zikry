import React from 'react'
import NavbarStyle from './Navbar.module.css'

export default function Navbar() {
    return (<>


        <div className={`${NavbarStyle.body}`}>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                <img src='./../../images/frame.png' ></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${NavbarStyle.items} `}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">First Secondary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Second Secondary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Third Secondary</a>
                            </li>
                        </ul>
                        <div className= {`d-flex justify-content-center`}>
                            <div className=" icons d-flex align-items-center">
                                <i className="fa-solid fa-bag-shopping"></i>
                                <i className={`fa-solid fa-magnifying-glass`}></i>
                            </div>
                            <div>
                                <button className={` ${NavbarStyle.btnSignIn}`}>Sign in</button>
                                <button className={` ${NavbarStyle.btnSignUp}`}>Join For Free</button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </nav>
        </div>
    </>
    )
}
