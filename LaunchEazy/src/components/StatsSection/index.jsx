import React from 'react'
import './styles.css'

function StatsSection() {
  return (
    <>
    <div className="statsContainer">
        <div className="text">Accelerate growth.<br/> Maximize savings.<br/> Reduce efforts.</div>
        <div className="statsCards">
            <div className="stats">
                <div className="head">160%</div>
                <div className="foot">Increase in revenue<br/> generated for your<br/> business</div>
            </div>
            <div className="stats">
                <div className="head">$60K</div>
                <div className="foot">Saved on annual<br/> marketing expenditure</div>
            </div>
                <div className="stats">
                <div className="head">12</div>
            <div className="foot">hours saved on<br/> marketing efforts<br/> weekly</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StatsSection
