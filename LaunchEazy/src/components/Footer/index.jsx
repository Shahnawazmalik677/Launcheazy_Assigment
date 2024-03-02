import React from 'react'
import './styles.css'
import Logo from "../../assets/images/Logo (1).svg?react"
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
                    <div className="social"><a href='https://www.linkedin.com/company/launcheazy/' target={'_blank'}><Linkdin className="svg-element"/></a></div>
                    <div className="social"><a href='https://www.facebook.com/launcheazy' target={'_blank'}><Facebook className="svg-element"/></a></div>
                    <div className="social"><a href='https://www.instagram.com/launch.eazy/' target={'_blank'}><Instagram className="svg-element"/></a></div>
                    <div className="social"><a href='mailto:%20contact@launcheazy.com' target={'_blank'}><Mail className="svg-element"/></a></div>
                </div>
            </div>
            <div className="rightSection">
                <div className="linkSection">
                    <div className="textBold">AI Tools</div>
                    <div className="textNormal">ChatGPT Prompts</div>
                    <div className="textNormal">AI Tools Directory</div>
                    <div className="textNormal">AI QR Generator</div>
                </div>
                <div className="linkSection">
                <div className="textBold">Resources</div>
                    <div className="textNormal">Marketplace</div>
                    <div className="textNormal">Blogs</div>
                    <div className="textNormal">Help Center</div>
                </div>
                <div className="linkSection">
                <div className="textBold">Company</div>
                    <div className="textNormal">About Us</div>
                    <div className="textNormal">Pricing</div>
                    <div className="textNormal">Contact Us</div>
                </div>
            </div>
        </div>
       </div>
       <div className="footerDown">
        <div className="leftFooterDown">
            <div className="topText">NEWSLETTER</div>
            <div className="midText">The AI Launch<span style={{color:"var(--blue-blue-50-main, #4589FF)"}}>pad</span> 🚀</div>
            <div className="bottomTextFooter">Receive must-read articles and trends on marketing and artificial intelligence, from leading publications in your inbox.</div>

        </div>
        <div className="rightFooterDown">
            <div className="footerSearchBox"><input className='footerSearch' placeholder='Enter Your Email'></input>
            <div className="termCondition">By signing up, you are agreeing to our <span style={{color:"var(--blue-blue-50-main, #4589FF)"}}>privacy statement.</span></div>
            </div>
            <button className='subscribeButton'>Subscribe</button>
        </div>
       </div>
       <div className="lineConatiner">
        <div className="lineFooterr"></div>
       </div>
       <div className="copywrite">
        <div className="leftTextCopywrite">Copyright 2023 Launcheazy AI Private Limited. All rights reserved.</div>
        <div className="rightTextCopywrite">Privacy Policy | Terms of Service</div>
       </div>
    </div>
  )
}

export default Footer
