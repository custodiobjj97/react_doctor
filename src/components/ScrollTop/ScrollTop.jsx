import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import './scroll.css';
const ScrollTop = () => {
    const [isVisible,setisVisible]=useState(false);

    const goToBtn=(event)=>{
        event.preventDefault()
        window.scrollTo({top:0,behavior:"smooth"})
    }

    const listenToScroll=()=>{
        let heightToHidden = 20;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHidden){
            setisVisible(true)
        }else{
            setisVisible(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
    },[])
  return (
    <>
     {isVisible && (
        <a href="#" className='top-btn' onClick={goToBtn}>
            <FaArrowUp/>
        </a>
     )}
    </>
  )
}

export default ScrollTop