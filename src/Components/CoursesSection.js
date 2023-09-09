import React from "react";
import CoursesCard from "./CoursesCard";

const CoursesSection = () => {
    return (
        <>
            <div className="Courses">
                <div className="Courses-Content">
                    <CoursesCard imageSrc={require("../assets/professors/SharonKam.jpeg")} title="Cours de piano" description="Apprendre le piano avec un professeur particulier" name="Madame Machin"/>
                    <CoursesCard imageSrc={require("../assets/professors/SharonKam.jpeg")} title="Cours de piano" description="Apprendre le piano avec un professeur particulier" name="Madame Machin"/>
                    <CoursesCard imageSrc={require("../assets/professors/SharonKam.jpeg")} title="Cours de piano" description="Apprendre le piano avec un professeur particulier" name="Madame Machin"/>
                </div>
            </div>
        </>
    )
}

export default CoursesSection;