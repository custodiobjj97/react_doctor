import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import HomeImg from "../../img/profile-1.png";
import Button from '../Button/Button.jsx'
import "./home.css"
import Scroll from '../ScrollAnimation/Scroll.jsx';
const Home = () => {
  

  return (
    <section  className='home' id='home'>
       
        <div className="home-text">
        <Scroll>
        <span>❤️ Health comes first</span>
        <h1>Find your Doctor and make <br/>
        an Appointments</h1>
        <p>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within <br/>
        minutes. On-demand healthcare services at your fingertips.</p>
         <Button icon={<FaCalendar/>} text={"Book Appointment"}/>
         <ul className='list-number'>
            <li>
                <h3>145k+</h3>
                <p>Receive Patients</p>
            </li>
            <li>
            <h3>50+</h3>
            <p>Expert Doctors</p>
            </li>
            <li>
            <h3>10+</h3>
            <p>Years of Experience</p>
            </li>
         </ul>
         </Scroll> 
        </div>
   
      
        <div className='home-img'>
        <Scroll>
            <img src={HomeImg} alt="" />
            </Scroll> 
        </div>
        
    </section>
  )
}

export default Home