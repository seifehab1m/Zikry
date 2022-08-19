
import React, { useRef, useState, useEffect } from "react";
import SwiperCollerction from '../SwiperCollection/SwiperCollerction'
import './Live.css';

export default function Live() {
  let [cloudRoomDetails, setCloudRoomDetails] = useState([
    {
        image: "./../../images/cloudRoom1.png",
        name: "Biology 2nd Final Revesion Secondary 2022- ahmed ",
        instractorImg: "./../../images/avatar.png",
        intractor: "Speaker: Ahmed Ali Abd El Gwad",
        time: "11:00 AM - 1:00 PM (2 hrs)",
        calender: "24 Apr 2021",
        button: "Watch"

    },
    {
        image: "./../../images/subject2.png",
        name: "100 comprehensive questions on the days - Taha Hussein ",
        instractorImg: "./../../images/avatar.png",
        intractor: "Speaker: Ahmed Ali Abd El Gwad",
        time: "11:00 AM - 1:00 PM (2 hrs)",
        calender: "24 Apr 2021",
        button: "Watch"

    },
    {
        image: "./../../images/subject3.png",
        name: "100 comprehensive questions on the days - Taha Hussein ",
        instractorImg: "./../../images/avatar.png",
        intractor: "Speaker: Ahmed Ali Abd El Gwad",
        time: "11:00 AM - 1:00 PM (2 hrs)",
        calender: "24 Apr 2021",
        button: "Watch"

    },
    {
        image: "./../../images/subject4.png",
        name: "English Level 3 high school 2022 part 2- ahmed ",
        instractorImg: "./../../images/avatar.png",
        intractor: "Speaker: Ahmed Ali Abd El Gwad",
        time: "11:00 AM - 1:00 PM (2 hrs)",
        calender: "24 Apr 2021",
        button: "Watch"

    },
    {
        image: "./../../images/subject1.png",
        name: "100 comprehensive questions on the days - Taha Hussein",
        instractorImg: "./../../images/avatar.png",
        intractor: "Speaker: Ahmed Ali Abd El Gwad",
        time: "11:00 AM - 1:00 PM (2 hrs)",
        calender: "24 Apr 2021",
        button: "Watch"

    }])

return (
    <div className="live position-relative">
        <div className="liveTitle p-3 position-relative">
            <div className=" bg-lamp position-absolute w-100 h-100  "></div>
            <div className="  d-flex justify-content-center align-items-center m-auto">
                <img src="./../../images/Live.png"/>
            </div>
            <div className="liveh2Bg">
                <h2 className="text-center m-auto ">we provide online discussion<br />
                for free</h2>
            </div>
        </div>
        <div className="bgSwiperCollection ">
            
        <SwiperCollerction cloudRoomDetails={cloudRoomDetails} />
       

        </div>
    </div>
)
}