
import React from 'react'
import PartOne from '../Components/AboutUsComponents/PartOne';
import PartTwo from '../Components/AboutUsComponents/PartTwo';
import PartThree from '../Components/AboutUsComponents/PartThree';
import PartFour from '../Components/AboutUsComponents/PartFour';
import PartFive from '../Components/AboutUsComponents/PartFive';

export default function About() {
  return (
    <>
     <div className="AboutUs-Container">
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
      <PartFive />
     </div>
    </>
  )
}

