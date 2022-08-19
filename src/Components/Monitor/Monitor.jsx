import React from 'react'
import MonitorStyle from './Monitor.module.css';

export default function Monitor() {
    return (
        <div className={`${MonitorStyle.bg}`} >
            <div className=' container mt-5'>
                <div className='row pt-5'>
                    <div className='col-md-6'>

                        <img className='w-100' src='./../../images/monitor.png' />
                    </div>
                    <div className='col-md-6'>
                        <h2 className={`${MonitorStyle.details} mt-5`}>monitoring your self  and <br/>follow up your updates </h2>
                        <p className='mt-2'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                        <i className="fa-solid fa-check d-flex mt-5"> <h6 className={`${MonitorStyle.MonitorStyleIconText} ps-3 `}>Nationwide Locations running monthly whether </h6> </i>
                        <i className="fa-solid fa-check d-flex mt-2"> <h6 className={`${MonitorStyle.MonitorStyleIconText} ps-3`}>Whether you have some previous experience</h6> </i>
                        <i className="fa-solid fa-check d-flex mt-2"> <h6 className={`${MonitorStyle.MonitorStyleIconText} ps-3`}>Acudemy features a wide range of Accounting courses,</h6> </i>
                        <i className="fa-solid fa-check d-flex mt-2"> <h6 className={`${MonitorStyle.MonitorStyleIconText} ps-3`}>Acudemy features a wide range of Accounting courses,</h6> </i>
                    </div>

                </div>
            </div>
        </div>
    )
}
