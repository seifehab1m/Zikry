import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import "./SwiperCollection.css";

export default function (props) {
    let { cloudRoomDetails } = props
    console.log(props);



    return (


        <div className="swiperCollection d-flex justify-content-center">
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
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200    : {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },

                }}
            >
                {cloudRoomDetails.map((item, i) =>

                    <SwiperSlide key={i} >
                        <div className="shadow border rounded-2 mb-5">

                            <img src={`${item.image}`} />

                            <h5>{`${item.name}`}</h5>
                            <div className="instractor d-flex align-items-center">
                                <img className="avatar" src={`${item.instractorImg}`} />
                                <h6>{`${item.intractor}`}</h6>
                            </div>
                            <div className="d-flex justify-content-between  mt-2">
                                <div className="instractorTime text-muted d-flex align-items-center">
                                    <img className="avatar" src="./../../images/clock.png" />
                                    <h6 className="text-muted">{`${item.time}`}</h6>
                                </div>
                                <div className="instractorCalender text-muted d-flex align-items-center">
                                <img className="avatar" src="./../../images/calender.png" />
                                    <h6 className="text-muted">{`${item.calender}`}</h6>
                                </div>
                            </div>

                            <div className="instractorBtns d-flex justify-content-center align-items-center mt-2 mb-2">


                                <button className="d-flex justify-content-center align-items-center">{`${item.button}`}
                                    <i className="fa-solid fa-arrow-right-long ps-2"></i></button>


                            </div>
                        </div>
                    </SwiperSlide>)

                }

            </Swiper>
        </div>
    )
}
