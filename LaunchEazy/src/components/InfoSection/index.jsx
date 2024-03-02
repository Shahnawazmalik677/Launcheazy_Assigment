import React, { useRef } from 'react'
import "./styles.css"
function InfoSection() {
  return (
    <>
    <div className="InfoContainer">
        <div className="leftInfoText">
            <div className="headText">Marketing Tools</div>
            <div className="midBoldText">Skyrocket <div className="rocket">🚀</div>your growth with advanced marketing tools</div>
            <div className="footText">A library of ready-to-use marketing campaigns, workflows and programs to accelerate your growth, maximize savings and reduce efforts.</div>
             <div className="Infobutton"><button className='bt'>Join the Waitlist</button></div>
        </div>
        <div className="rightCards">
            <div className="card" style={{backgroundColor:" #A6C8FF"}}>
                <div className="text1">Reputation Management</div>
                <div className="text2">Improve online reputation and business listings.</div>
            </div>
            <div className="card"  style={{backgroundColor:"#FEC57B"}}>
            <div className="text1">Smart Inbox</div>
                <div className="text2">Manage customer conversations from every channel in a single, easy-to-use inbox.</div>
            </div>
            <div className="card" style={{background: "#6FDC8C"}}>
            <div className="text1">Social Media Management</div>
                <div className="text2">Manage your social media profiles and paid ads from a single intuitive view.</div>
            </div>
            <div className="card" style={{background:"#FFB3B8"}}>
            <div className="text1">Marketing Plan</div>
                <div className="text2">Run your entire marketing on autopilot.</div>
            </div>
            <div className="card lst" style={{background: "#E0E0E0"}}>
            <div className="text1">Unified Reporting</div>
                <div className="text2">Track ROI on every dollar spend.</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default InfoSection
