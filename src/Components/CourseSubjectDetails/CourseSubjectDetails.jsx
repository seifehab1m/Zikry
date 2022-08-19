import React, { useRef, useState, useEffect } from "react";
import CourseSubjectNav from './../CourseSubjectNav/CourseSubjectNav';

export default function CourseSubjectDetails() {

    let [firstSecondary, setFirstSecondary] = useState([
        {
            image: "./../../images/subject1.png",
            name: "Biology 2nd Final Revesion Secondary 2022- ahmed ",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject2.png",
            name: "100 comprehensive questions on the days - Taha Hussein ",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject3.png",
            name: "100 comprehensive questions on the days - Taha Hussein ",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject4.png",
            name: "English Level 3 high school 2022 part 2- ahmed ",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject1.png",
            name: "100 comprehensive questions on the days - Taha Hussein",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        }

    ])
    let [secondSecondary, setSecondSecondary] = useState([
        {
            image: "./../../images/subject3.png",
            name: "Professional Assistent2",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject2.png",
            name: "Zikry Show2",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject1.png",
            name: "Ziry Green line2",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject4.png",
            name: "Professional Assistent2",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        }

    ])

    let [thirdSecondary, setThirdSecondary] = useState([
        {
            image: "./../../images/subject4.png",
            name: "Professional Assistent3",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject3.png",
            name: "Zikry Show3",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject2.png",
            name: "Ziry Green line3",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        },
        {
            image: "./../../images/subject1.png",
            name: "Professional Assistent3",
            instractorImg: "./../../images/avatar.png",
            intractor:"Mr: Ahmed Ali Abd El Gwad",
            time:"3 hr 30 min",
            rate:"4.3",
            cost:"245.5 E.G"
        }

    ])
    return (
        <div>
            <CourseSubjectNav firstSecondary={firstSecondary}  secondSecondary={secondSecondary} thirdSecondary={thirdSecondary} />
           
        </div>
    )
}
