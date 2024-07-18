import React from 'react'
import {FaCheck} from 'react-icons/fa'
import ImgAbout from "../../img/doctor-group.png"
import "./about.css";


const About = () => {
    
  return (
    <section  className='about' id='about'>
        <div className="about-image">
            <img src={ImgAbout} alt="" />
        </div>
        <div className="about-text">
            <h2>About Us</h2>
            <p>Welcome to Health Plus, your trusted partner for accessible and personalized healthcare. Our expert doctors offer online consultations and specialized services, prioritizing your well-being. Join us on this journey towards a healthier you.</p>

            <h3>Your Solutions</h3>
            <ul>
                <li>
                    <h4> <FaCheck color='hsl(340 62% 38%)'/> Choose a Specialist</h4>
                    <p>Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care.</p>
                </li>
                <li>
                <h4><FaCheck color='hsl(340 62% 38%)'/> Make a Schedule</h4>
                <p>Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care</p>
                </li>
                <li>
                <h4> <FaCheck color='hsl(340 62% 38%)'/> Get Your Solutions</h4>
                <p>Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health.</p>
                </li>
    
            </ul>
        </div>
    </section>
  )
}

export default About