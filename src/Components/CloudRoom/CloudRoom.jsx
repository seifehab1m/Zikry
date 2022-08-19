import React, { useRef, useState, useEffect } from "react";
import SwiperCollerction from '../SwiperCollection/SwiperCollerction'
import './CloudRoom.css';

export default function CloudRoom() {
    let [cloudRoomDetails, setCloudRoomDetails] = useState([
        {
            image: "./../../images/cloudRoom1.png",
            name: "Biology 2nd Final Revesion Secondary 2022- ahmed Hussein ",
            instractorImg: "./../../images/avatar.png",
            intractor: "Speaker: Ahmed Ali Abd El Gwad",
            time: "11:00 AM - 1:00 PM (2 hrs)",
            calender: "24 Apr 2021",
            button: "Book A Ticket"

        },
        {
            image: "./../../images/subject2.png",
            name: "100 comprehensive questions on the days - Taha Hussein ",
            instractorImg: "./../../images/avatar.png",
            intractor: "Speaker: Ahmed Ali Abd El Gwad",
            time: "11:00 AM - 1:00 PM (2 hrs)",
            calender: "24 Apr 2021",
            button: "Book A Ticket"

        },
        {
            image: "./../../images/subject3.png",
            name: "100 comprehensive questions on the days - Taha Hussein ",
            instractorImg: "./../../images/avatar.png",
            intractor: "Speaker: Ahmed Ali Abd El Gwad",
            time: "11:00 AM - 1:00 PM (2 hrs)",
            calender: "24 Apr 2021",
            button: "Book A Ticket"

        },
        {
            image: "./../../images/subject4.png",
            name: "English Level 3 high school 2022 part 2- ahmed Hussein",
            instractorImg: "./../../images/avatar.png",
            intractor: "Speaker: Ahmed Ali Abd El Gwad",
            time: "11:00 AM - 1:00 PM (2 hrs)",
            calender: "24 Apr 2021",
            button: "Book A Ticket"

        },
        {
            image: "./../../images/subject1.png",
            name: "100 comprehensive questions on the days - Taha Hussein",
            instractorImg: "./../../images/avatar.png",
            intractor: "Speaker: Ahmed Ali Abd El Gwad",
            time: "11:00 AM - 1:00 PM (2 hrs)",
            calender: "24 Apr 2021",
            button: "Book A Ticket"

        }])

    return (
        <div className="classRoom position-relative">
            <div className="classRoomTitle p-3 position-relative">
                <div className=" bg-vector position-absolute w-100 h-100  "></div>
                <div className="featuresBg  d-flex justify-content-center align-items-center m-auto">
                    <h6 >New features</h6>
                </div>
                <div className="classRoomh2Bg">
                    <h2 className="text-center m-auto ">Cloud Rooms <br />
                        With Your Teacher</h2>
                </div>
            </div>
            <div className="bgSwiperCollection ">
                <img className="position-absolute top-0 start-0" src="./../../images/cloudRoomBox.png"/>
            <SwiperCollerction cloudRoomDetails={cloudRoomDetails} />
            <img className="position-absolute bottom-0 end-0" src="./../../images/cloudRoomBox2.png"/>

            </div>
        </div>
    )
}
