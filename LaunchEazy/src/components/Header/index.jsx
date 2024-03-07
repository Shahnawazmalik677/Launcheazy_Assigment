import React, { useState,useEffect } from 'react'
import Logo from "../../assets/images/Logo.svg?react"
import Icon from "../../assets/images/Icons.svg?react"
import Toggle from "../../assets/images/menu.svg?react"
import "./styles.css"
import { NavLink } from "react-router-dom";
function Header() {

   let [togglebtn,setTogglebtn]=useState({
    parent:"parent",
    buttons:"buttons",
    btn:"btn",
    line:"line"

  })
  const [on,setOn]=useState(false);
  const [width,setWidth]=useState(window.innerWidth);
  const HandleClick=()=>{
      if(on==false)setTogglebtn({
      parent:"parent parentToggle",
      buttons:"buttonsToggle",
      btn:"btn btnToggle",
      line:"line lineToggle"
     })
     else setTogglebtn({
      parent:"parent",
      buttons:"buttons",
      btn:"btn",
      line:"line"
     });
     setOn(!on);
  }
  if(width>=993 && on==true){
    setTogglebtn({
      parent:"parent",
      buttons:"buttons",
      btn:"btn",
      line:"line"
     });
     setOn(!on);
  }
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return (
    <div>
       <div className={togglebtn.parent}>
        <div className="logo"><Logo/>
        </div>
        <div className={togglebtn.buttons}>
         <button className={togglebtn.btn} style={{width:"8vw"}}>
         <div className="yellowFree">Free</div>
          <NavLink className='navLink'>AI Tools</NavLink>
          <Icon/>
          </button>
         <button className={togglebtn.btn}><NavLink className='navLink'>Product</NavLink> <Icon className='iconDown'/></button>
         <button className={togglebtn.btn}><NavLink className='navLink'>Resources</NavLink> <Icon  className='iconDown'/></button>
         <button className={togglebtn.btn}><NavLink className='navLink'>Pricing</NavLink></button>
         <button className={togglebtn.btn}><NavLink className='navLink'>Contact Us</NavLink></button>
         <div className="waitListButton">Join the waitlist</div>
        </div>
        <div className="Toggle" onClick={HandleClick}><Toggle/></div>
       </div>
       <div className={togglebtn.line}></div>
    </div>
  )
}

export default Header
