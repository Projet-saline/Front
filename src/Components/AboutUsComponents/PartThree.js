import React from 'react'
import Orchestre from "../../assets/orchestre.jpg";


export default function PartThree() {
  return (
    <>
      <div className="part-Three">
      <img src= {Orchestre}  className="AboutUs-Img" alt="" />
      <div className='part-Text'>
        <h2 className='part-Title'> About Saline Scholarship application</h2>
 <p className='partone-Subtitle'>
 Candidates may apply for a scholarship. Priority is given to students enrolled in a higher music education institution in France and abroad. <br />Scholarship amounts range from €100 to €450. A student’s motivation, background, and professional plans are taken into account. <br />

The grant may require the student to participate in artistic activities organized during the session in which he or she is registered. <br />

The application must be written in French or English and all sections must be completed. <br />

The grant awarding committee will notify its decision at the same time as the artistic committee. If the decision is negative, the student has 48 hours to cancel or confirm his/her application.
 </p>
    </div>
      </div>
    </>
  )
}
