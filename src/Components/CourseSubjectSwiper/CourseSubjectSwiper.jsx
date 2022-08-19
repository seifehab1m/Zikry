import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import "./CourseSubjectSwiper.css";

export default function (props) {
    let { Secondary } = props




    return (



        <div className="CourseSubjectSwiper">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper container p-0 m-0"

                breakpoints={{
                    0:
                    {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    544: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1197: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                {Secondary.map((item, i) =>

                    <SwiperSlide key={i} >
                        <div className="shadow border rounded-2 mb-5">

                            <img src={`${item.image}`} />

                            <h5>{`${item.name}`}</h5>
                            <div className="instractor d-flex align-items-center">
                                <img className="avatar" src={`${item.instractorImg}`} />
                                <h6>{`${item.intractor}`}</h6>
                            </div>
                            <div className="instractorTime text-muted d-flex align-items-center mt-1">
                                <img className="avatar" src="./../../images/clock.png" />
                                <h6 className="text-muted">{`${item.time}`}</h6>
                            </div>
                            <div className="d-flex align-items-center mt-1 justify-content-between">
                                <div className="InstractorRate  d-flex align-items-center ">
                                    <h6>{`${item.rate}`}</h6>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="InstractorCost">
                                    <h6>{`${item.cost}`}</h6>
                                </div>
                            </div>
                            <div className="instractorBtns d-flex justify-content-between align-items-center mt-1 mb-2">

                                <div className="instractorEnroll">
                                    <button className="d-flex align-items-center">Enroll Now
                                        <i className="fa-solid fa-arrow-right-long ps-2"></i></button>
                                </div>
                                <div className="instractorIcon d-flex justify-content-center align-items-center">

                                    <div className="instractorIcon-bg h-100  d-flex justify-content-center align-items-center me-1">
                                        <i className="fa-solid fa-heart "></i>
                                    </div>
                                    <div className="instractorIcon-bg h-100  d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)

                }

            </Swiper>
        </div>
    )
}
