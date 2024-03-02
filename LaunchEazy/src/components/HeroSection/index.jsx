import React, { useEffect, useState } from 'react'
import RedIcon from "../../assets/images/Live animation.svg?react"
import "./styles.css"
import RightIcon from "../../assets/images/Right icon.svg?react"
import Cursor from "../../assets/images/cursor.svg?react"
import { NavLink } from 'react-router-dom'

function HeroSection() {

  return (
    <>
       <div className="heroTop">
       <div className="betaMsg">
         
           <div className="redSvg"><RedIcon/></div>
           <div className="innerText">Our exclusive beta is live.</div>
           <div className="endText"><NavLink className='nav'>Sign up for free</NavLink><RightIcon/> </div>
       </div>
       <div className="textChange">
       <div className="rollingText">
        <div className="blueText">Generate leads</div>
        <div className="blueText">Convert prospects</div>
        <div className="blueText">Retain customers</div>
       </div>
       </div>
       <div className="fixedText">in 3 clicks for your business</div>
       <div className="arrowIcon"><Cursor/></div>
       <div className="infoText">Simplify your marketing efforts with AI. Use a collection of ready-made, successful marketing<br/>strategies that practically run themselves.</div>
       </div>
     
     <div className="herobottom">
       
       <div className="search">
        <input placeholder='Enter Your Work Email' className='searchBar'></input>
       </div>
       <div className='herobutton'>
        <button className='joinButton'>Join the waitlist</button>
       </div>
        </div>
        <div className="bottomText">Get access to a comprehensive directory of <span style={{color:"#F18D13"}}>AI Tools</span> and <br/> <span style={{color:"#24A148"}}>ChatGPT Prompts</span> to elevate your business.</div>

    </>
  )
}

export default  HeroSection
