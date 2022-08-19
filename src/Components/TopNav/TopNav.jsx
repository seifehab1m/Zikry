import React from 'react'
import TopNavStyle from './TopNav.module.css'

export default function TopNav() {
    return (
        <>
            <div className={`${TopNavStyle.body}`}>
                <div className={`container d-flex align-items-center  justify-content-between  `} >
                    <div className={`d-flex align-items-center justify-content-center ${TopNavStyle.icons} `}>

                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>

                    </div>
                    <div className={`d-flex align-items-center ${TopNavStyle.language} `}>
                        <h6 style={{cursor:"pointer"}}>AR</h6>
                        <select name="cars" id="cars">
                            <option value="EGP">EGP</option>
                            <option value="EGP">EGP</option>
                            <option value="EGP">EGP</option>
                            <option value="EGP">EGP</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}
