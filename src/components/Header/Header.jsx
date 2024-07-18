import React, { useState } from 'react'
import {FaPlus,FaBars,FaTimes} from "react-icons/fa"
import "./header.css";

const Header = () => {
  
  
  const [open,setOpen]=useState(false);
  


  const openMenu = () =>{
    setOpen(!open)
  }
  
 
  return (
    <header>
        <a href="#" className='logo'>
        Health <FaPlus color='#0092E0'/>
        </a>

        <nav>
          <ul className={open ? "list-menu open" : "list-menu"}>
            <li><a  href="#home">Home</a></li>
            <li><a  href="#services">Services</a></li>
            <li><a  href="#about">About</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#doctor">Doctors</a></li>
          </ul>
        </nav>

        <div className="toggle" onClick={openMenu}>
          {open ? <FaTimes className='bars'/> : <FaBars className='bars'/>}
        </div>
    </header>
  )
}

export default Header