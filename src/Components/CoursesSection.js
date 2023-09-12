import React from "react";
import CoursesCard from "./CoursesCard";

const CoursesSection = () => {
    return (
        <>
            <div className="Courses">
                <h2>Our Teachers</h2>
                <p className="Intro">
                    Our world-renowned music instructors, with global accolades and experience performing in illustrious orchestras and operas, are here to guide you towards musical excellence. Learn from the best to become the outstanding musician you aspire to be.
                </p>
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