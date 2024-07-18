import React from 'react'
import ImgChoose from "../../img/doctor-book-appointment.png";
import { FaCalendar, FaCheck } from 'react-icons/fa6';
import Button from '../Button/Button';
import "./choose.css"

const Choose = () => {
  return (
    <section className='choose' id='reviews'>
        <div className="choose-image">
           <img src={ImgChoose} alt="" />
        </div>
        <div className="choose-text">
           <h2>Why Choose Health</h2>
           <p>Discover the reasons to choose Health Plus for your healthcare needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.</p>
           <ul className='list-choose'>
            <li><FaCheck color='hsl(210 98% 55%)'/> <h4> Best Professional Doctors</h4></li>
            <li><FaCheck color='hsl(210 98% 55%)'/> <h4> Emergency Care</h4></li>
            <li><FaCheck color='hsl(210 98% 55%)'/> <h4>24/7 Support Live Chat</h4></li>
            <li><FaCheck color='hsl(210 98% 55%)'/> <h4>Enrollment Easy and Quick</h4></li>
           </ul>
           <Button icon={<FaCalendar/>} text="Book Appointment"/>
        </div>
    </section>
  )
}

export default Choose