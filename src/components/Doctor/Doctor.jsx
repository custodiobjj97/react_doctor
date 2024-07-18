import React from 'react';
import Prolife1 from '../../img/profile-1.png';
import Prolife2 from '../../img/profile-2.png';
import Prolife3 from '../../img/profile-3.png';
import Prolife4 from '../../img/profile-4.png';

import "./doctor.css";
import { FaStar } from 'react-icons/fa';

const Doctor = () => {
  return (
    <section className='doctor' id='doctor'>
        <h2>Meet Our Doctors</h2>
        <p>Meet our exceptional team of specialist doctors, dedicated to providing top-notch healthcare services at Health Plus. Trust in their knowledge and experience to lead you towards a healthier and happier life.</p>
         <div className="doctor-grid">
            <div className="card-doctor">
                <img src={Prolife1} alt="" />
                <h4>Dr. Kathryn Murphy</h4>
                <p>General Surgeons</p>
                <p><FaStar color='#f7bb50'/><span><strong> 4.9 (1800+ Reviews)</strong> </span></p>
            </div>
            <div className="card-doctor">
            <img src={Prolife2} alt="" />
                <h4>Dr. Jacob Jones</h4>
                <p>Hematologists</p>
                <p><FaStar color='#f7bb50'/>  <span> <strong>4.8 (1200+ Reviews)</strong> </span></p>
            </div>
            <div className="card-doctor">
            <img src={Prolife3} alt="" />
                <h4>Dr. Jenny Wilson</h4>
                <p>Endocrinologists</p>
                <p><FaStar color='#f7bb50'/> <span> <strong>4.7 (960+ Reviews)</strong> </span></p>
            </div>
            <div className="card-doctor">
            <img src={Prolife4} alt="" />
                <h4>Dr. Albert Flores</h4>
                <p>Hematologists</p>
                <p><FaStar color='#f7bb50'/> <span><strong>4.6(900+ Reviews) </strong> </span></p>
            </div>
         </div>
    </section>
  )
}

export default Doctor