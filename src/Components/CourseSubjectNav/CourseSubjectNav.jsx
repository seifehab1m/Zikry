import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import "./CourseSubjectNav.css";
import CourseSubjectSwiper from "../CourseSubjectSwiper/CourseSubjectSwiper";

export default function CourseSubject(props) {


    let { firstSecondary } = props
    let { secondSecondary } = props
    let { thirdSecondary } = props



    return (
        <>
            
            <div className="courseSubject position-relative ">
            <h2 className="w-100 text-center">Course Subjects to<br/>
            Suit You</h2>
            <div className=" bg2  w-100 position-absolute top-0 left-0"></div>
               
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">First Secondary</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Second Secondary</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Third Secondary</button>
                    </li>
                </ul>
                <div className="tab-content container" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                        <CourseSubjectSwiper key={0} Secondary={firstSecondary} />




                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                        <CourseSubjectSwiper key={1} Secondary={secondSecondary} />



                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                        <CourseSubjectSwiper key={2} Secondary={thirdSecondary} />
                    </div>
                </div>

            </div>
        </>
    )
}
