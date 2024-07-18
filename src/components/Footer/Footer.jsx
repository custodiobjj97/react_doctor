import React from 'react'
import Button from "../Button/Button"
import "./footer.css";
import { FaPlus} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
        <div className="col-footer">
        <h2 className='logo-footer'>Health <FaPlus color='hsl(210 98% 55%)'/></h2>
        <p>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</p>
        <h3>Stay Update to our Newsletter</h3>
        <form action='#'>
            <input type="email" name="email" placeholder='Email' />
            <Button  text="submit" type="submit"/>
        </form>
        </div>
        <div className="col-footer">
         <h2>Services</h2>
         <ul className='list-footer'>
            <li><a href="#">Emergency Care</a></li>
            <li><a href="#">Heart Disease</a></li>
            <li><a href="#">Dental Care</a></li>
            <li><a href="#">Prescription</a></li>
            <li><a href="#">Prescription</a></li>
         </ul>
        </div>
        <div className="col-footer">
            <h2>Legal</h2>
            <ul className='list-footer'>
    <li><a href="#">General Info</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms of Services</a></li>
    <li><a href="#">Consultations</a></li>
    <li><a href="#">How it Works</a></li>
    </ul>
   </div>
<div className="col-footer">
        <h2>Talk To Us</h2>

<ul className='list-footer'>
    <li><a href="mailto:support@healthplus.com">support@healthplus.com</a></li>
    <li><a href="mailto:appointment@healthplus.com">appointment@healthplus.com</a></li>
    <li><a href="#">+022 5454 5252</a></li>
    <li><a href="#">+022 2326 6232</a></li>
</ul>
</div>

 <div className="copy">
 <p>© 2013-2023 Health+. All rights reserved.</p>

</div> 
</footer>
  )
}

export default Footer