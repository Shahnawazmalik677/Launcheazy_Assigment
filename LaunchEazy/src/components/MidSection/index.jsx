import React, { useEffect, useState } from 'react'
import "./styles.css"
import Svg1 from "../../assets/images/Step.svg?react"
import Svg2 from "../../assets/images/Step 2.svg?react"
import Svg3 from "../../assets/images/Step 3.svg?react"
import Left from "../../assets/images/Circle Button Left.svg?react"
import Right from "../../assets/images/Circle Button Right.svg?react"
import image1 from "../../assets/images/Home.png?react"
import image2 from "../../assets/images/Personalize.png?react"
import image3 from "../../assets/images/LastPage.png?react"

function MidSection() {
    const img=[image1,image2,image3];
    const [number,setNumber]=useState(0);
      
        const next=()=>{
            setNumber(Math.abs((number+1)%3));
      }

      const prev=()=>{
        if(number==0)setNumber(2);
        else setNumber(Math.abs((number-1)%3));
  }
  
  const style={}

    if (number==0){
      style.button1={
        background: "#4589FF",
        color:"white"
      }   
    }
    else if(number==1){
      style.button2={
        background: "#4589FF",
        color:"white"
      }
    }
    else {
      style.button3={
        background: "#4589FF",
        color:"white"
      }
    }



  return (
    <>
    <div className="parentBox">
        <div className="background">
            <div className="navButton1"  onClick={()=>prev()}><Left/></div>
            <div className="backgroundText">Auto-generate conversion focussed content <br/> for ready-to-use marketing recipes with AI</div>
            <div className="buttonContainer">
            <div className="button" onClick={()=>setNumber(0)} style={style.button1}><Svg1/>Explore</div>
            <div className="button" onClick={()=>setNumber(1)} style={style.button2}><Svg2/>Personalize</div>
            <div className="button" onClick={()=>setNumber(2)} style={style.button3}><Svg3/>Execute</div>
            </div>
            <div className="navButton2" onClick={()=>next()}><Right/></div>
        </div>
        <div className="frontImage" style={{backgroundImage:`url(${img[number]})`}}></div>
    </div>
    </>
  )
}

export default MidSection
