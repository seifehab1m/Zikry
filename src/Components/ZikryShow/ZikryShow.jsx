import React, { useRef, useState, useEffect } from "react";
import SwiperCollerction from '../SwiperCollection/SwiperCollerction'
import './ZikryShow.css';

export default function ZikryShow() {
  let [cloudRoomDetails, setCloudRoomDetails] = useState([
    {
      image: "./../../images/cloudRoom1.png",
      name: "Biology 2nd Final Revesion Secondary 2022- ahmed Hussein",
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
      name: "English Level 3 high school 2022 part 2- ahmed Hussein",
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
    <div className="ZikryShow position-relative">
      <div className="ZikryShowTitle p-3 position-relative">

        <div className="  d-flex justify-content-center align-items-center m-auto">
          <img src="./../../images/ZikryShow.png" />

        </div>
        <div className="ZikryShowh2Bg">
          <p className="text-center m-auto ">Lorem ipsum is placeholder text commonly used in the graphic, print, and <br /> publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
      <div className="bgSwiperCollection">
        <img className="position-absolute top-50 start-0" src="./../../images/zikryShowLeft.png" />

        <SwiperCollerction cloudRoomDetails={cloudRoomDetails} />
        <img className="position-absolute top-50 end-0" src="./../../images/zikryShowRight.png" />


      </div>
    </div>
  )
}