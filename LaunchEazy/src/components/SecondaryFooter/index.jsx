import React from 'react'
import './style.css'
function SecondaryFooter() {
  return (
    <>
    <div className="parentSecondaryFooter">
         <div className="contentContainer">
            <div className="textContainer">
                <div className="boldText">Say goodbye <div className="imgbye"></div>  to excessive spending on designers, experts, and multiple tools</div>
                <div className="normalText">Say hello to Launcheazy - your superstar marketer in your pocket!</div>
            </div>
         </div>
         <div className="searchAndButton">
            <input className='searchBar footSec' placeholder='Enter Your Work Email'></input>
            <button className='bt foot'>Join the Waitlist</button>

         </div>
    </div>
    </>
  )
}

export default SecondaryFooter
