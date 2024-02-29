import React from 'react'
import './styles.css'
import Logo from "../../assets/images/Logo.svg?react"
import Linkdin from "../../assets/images/Linkdin.svg?react"
import Instagram from "../../assets/images/Instagram.svg?react"
import Facebook from "../../assets/images/Facebook.svg?react"
import Mail from "../../assets/images/Mail.svg?react"
function Footer() {
  return (
    <div className='Footer'>
       <div className="footerUp">
        <div className="footerLinks">
            <div className="leftSection">
                <div className="logoWithText">
                    <div className="logoFooter"><Logo/></div>
                    <div className="textFooter">Engage customers, convert prospects effortlessly</div>
                </div>
                <div className="hyperLinks">
                    <div className="social"><Linkdin/></div>
                    <div className="social"><Facebook/></div>
                    <div className="social"><Instagram/></div>
                    <div className="social"><Mail/></div>
                </div>
            </div>
            <div className="rightSection"></div>
        </div>
       </div>
       <div className="footerDown"></div>
    </div>
  )
}

export default Footer
