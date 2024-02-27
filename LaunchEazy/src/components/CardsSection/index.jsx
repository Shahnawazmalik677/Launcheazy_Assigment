import React from 'react'
import './styles.css'
import Logooo from "../../assets/images/Image 1.jpg?react"
function CardsSection() {
  return (
   <>
    <div className="parentConatiner">
        <div className="staticText">
            <div className="text1">Marketing Recipes</div>
            <div className="text2">Attract. Convert. Retain.</div>
            <div className="text3">A library of ready-to-use marketing campaigns, workflows and programs to <br/> accelerate your growth, maximize savings and reduce efforts.</div>
            <div className='libButton'><button className='bt'>Visit the library</button></div>
        </div>
        <div className="cards"><Logooo/></div>
    </div>
   </>
  )
}

export default CardsSection
