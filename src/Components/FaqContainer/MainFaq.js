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
        {/* <div className="faq-Footer">
        <h2 className="main-title"> Didn't find your answer ? </h2>
        <button type="submit" value="Submit Message" className='btn-faq'> contact us </button>
        </div> */}
    </div>
    </>
  )
}
