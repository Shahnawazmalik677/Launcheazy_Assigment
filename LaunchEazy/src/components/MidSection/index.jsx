import React, { useEffect, useState } from 'react'
import "./styles.css"
import Svg1 from "../../assets/images/Step.svg?react"
import Svg2 from "../../assets/images/Step 2.svg?react"
import Svg3 from "../../assets/images/Step 3.svg?react"
import Left from "../../assets/images/Circle Button Left.svg?react"
import Right from "../../assets/images/Circle Button Right.svg?react"
import image1 from "../../assets/images/Home.png?react"
import image2 from "../../assets/images/Personalize.jpg?react"
import image3 from "../../assets/images/LastPage.png?react"

function MidSection() {
    const img=[image1,image2,image3];
    const [number,setNumber]=useState(0);
      
        const next=()=>{
            setNumber((number+1)%3);
      }

      const prev=()=>{
        setNumber((number-1)%3);
  }

  return (
    <>
    <div className="parentBox">
        <div className="background">
            <div className="navButton1" onClick={()=>prev()}><Left/></div>
            <div className="backgroundText">Auto-generate conversion focussed content <br/> for ready-to-use marketing recipes with AI</div>
            <div className="buttonContainer">
            <div className="button"><Svg1/>Explore</div>
            <div className="button"><Svg2/>Personalize</div>
            <div className="button"><Svg3/>Execute</div>
            </div>
            <div className="navButton2" onClick={()=>next()}><Right/></div>
        </div>
        <div className="frontImage" style={{backgroundImage:`url(${img[number]})`}}></div>
    </div>
    </>
  )
}

export default MidSection