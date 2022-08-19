import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./HomeSwiper.css";
// import required modules
import { Pagination } from "swiper";



export default function App() {
    let [swiperItems, setSwiperItem] = useState([
        {
            image: "./../../images/slider1.svg",
            name: "Professional Assistent",
            desc: "The gradual accumulation of information about "
        },
        {
            image: "./../../images/slider2.svg",
            name: "Zikry Show",
            desc: "The gradual accumulation of information about "
        },
        {
            image: "./../../images/slider3.svg",
            name: "Ziry Green line",
            desc: "The gradual accumulation of information about "
        },
        {
            image: "./../../images/slider1.svg",
            name: "Professional Assistent",
            desc: "The gradual accumulation of information about "
        }

    ])

  
    
    return (
        <div className="Swipper">

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper container"

                breakpoints={{
                    0:
                    {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                {swiperItems.map((item, i) =>

                    <SwiperSlide key={i}>
                        <div className="border shadow p-3 rounded-4 mb-2">
                            <img src={`${item.image}`} />
                            <h5>{`${item.name}`}</h5>
                            <p className="text-muted">{`${item.desc}`}</p>
                        </div>
                    </SwiperSlide>)}

            </Swiper>
        </div>
    );
}
