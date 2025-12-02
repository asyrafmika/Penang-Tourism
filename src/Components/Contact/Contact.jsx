import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import locate_icon from '../../assets/location-icon.png'

const Contact = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "329e6990-9847-42c3-90ba-f56604a519c2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
    <div className='contact' id='contact'>
        <div className="contact-call">
            <h3>Send us a message<img src={msg_icon} alt="" /></h3>
            <p>We’d love to hear from you! Feel free to reach out to us 
                through email, phone, or visit us in Penang for any 
                inquiries or collaboration opportunities.</p>
            <ul>
                <li><img src={mail_icon} alt="" />TourPenang@gmail.com </li>
                <li><img src={phone_icon} alt="" />+60 1139502751 </li>
                <li><img src={locate_icon} alt="" />Penang </li>
            </ul>
        </div>
        <div className="contact-call">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter phone number'
                required/>
                <label>Enter your Email</label>
                <input type="text" name='email' placeholder='Enter your email'
                required/>
                <label>Write you message</label>
                <textarea name="message"  rows='6' placeholder='Enter your message' 
                required></textarea>
                <button type='submit' className='button dark-button'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
