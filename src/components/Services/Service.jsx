import React from 'react';
import {FaHeart,FaAmbulance,FaTooth} from "react-icons/fa"
import './service.css';

const Service = () => {
  return (
    <section className='service' id='services'>
        <h2>What We Do</h2>
        <p>We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services tailored to your needs. Our platform allows you to connect with experienced online doctors who provide expert medical advice, issue online prescriptions, and offer quick refills whenever you require them.</p>
        <div className="service-grid">
        
            <div className="col-service">
            <FaAmbulance className='icon-services'/>
            <h3>Emergency Care</h3>
            <p>Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care.</p>

            </div>
            <div className="col-service">
            <FaHeart className='icon-services'/>
               <h3>Heart Disease</h3>
               <p>Our team of experienced cardiologists and medical experts use state-of-the-art technology to assess your cardiovascular health and design personalized treatment plans. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy heart and lead a fulfilling life.</p>
            </div>
            <div className="col-service">
                <FaTooth className='icon-services'/>
            <h3>Dental Care</h3>
            <p>Our team of experienced cardiologists and medical experts use state-of-the-art technology to assess your cardiovascular health and design personalized treatment plans. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy heart and lead a fulfilling life.</p>
            </div>
        </div>
    </section>
  )
}

export default Service