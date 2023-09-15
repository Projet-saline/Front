// import React from 'react'
import React from "react";
import { data } from "../../data";
import Accordion from "../FaqContainer/Accordion"

export default function MainFaq() {
  return (
    <>
    <div className='faq-Container'>
      <h2 className='main-title'> Frequently asked questions </h2>
      <div className="main-title-underline"></div>
      {data.map((section, index)=>(
            <Accordion key={index} section={section} />
        ))}
    </div>
    </>
  )
}
