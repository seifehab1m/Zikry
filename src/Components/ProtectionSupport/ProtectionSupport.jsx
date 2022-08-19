import React from 'react'
import ProtectionStyle from './ProtectionSupport.module.css';

export default function ProtectionSupport() {
    return (
        <div className='ProtectionSupport container mt-5'>
            <div className='row pt-5'>
                <div className='col-md-6'>
                    <h2>Profectional Support From <br /> <span className={`${ProtectionStyle.ProtectionSupportspan}  `} >Assistant</span> </h2>
                    <p className='mt-2'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                    <i className="fa-solid fa-circle-check d-flex mt-5"> <h6 className={`${ProtectionStyle.protectionSupportIconText} ps-3 `}>Nationwide Locations running monthly whether </h6> </i>
                    <i className="fa-solid fa-circle-check d-flex mt-2"> <h6 className={`${ProtectionStyle.protectionSupportIconText} ps-3`}>Whether you have some previous experience</h6> </i>
                    <i className="fa-solid fa-circle-check d-flex mt-2"> <h6 className={`${ProtectionStyle.protectionSupportIconText} ps-3`}>Acudemy features a wide range of Accounting courses,</h6> </i>
                    <i className="fa-solid fa-circle-check d-flex mt-2"> <h6 className={`${ProtectionStyle.protectionSupportIconText} ps-3`}>Acudemy features a wide range of Accounting courses,</h6> </i>
                </div>
                <div className='col-md-6'>

                    <img className='w-100' src='./../../images/assistant.png' />
                </div>
            </div>
        </div>
    )
}
