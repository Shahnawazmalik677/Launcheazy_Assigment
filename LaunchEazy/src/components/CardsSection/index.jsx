import React from 'react'
import './styles.css'
import Vector from '../../assets/images/Vector.svg?react'
function CardsSection() {
  return (
   <>
    <div className="parentConatiner">
        <div className="staticText">
            <div className="text11">Marketing Recipes</div>
            <div className="text22">Attract. Convert. Retain.</div>
            <div className="text33">A library of ready-to-use marketing campaigns, workflows and programs to <br/> accelerate your growth, maximize savings and reduce efforts.</div>
            <div className='libButton'>
                <button className='btCards'>Visit the library</button>
                <Vector className='vector'/>
            </div>
        </div>
        <div className="cards"></div>
    </div>
   </>
  )
}

export default CardsSection
