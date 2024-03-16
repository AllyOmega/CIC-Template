import React, { useState } from 'react';
import splashImage from '../gallery/splash.bmp';

function ContactForm({ menuOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'how can we serve you?',
  });
  
  const businessHours = {
    Monday: { open: '09:00', close: '18:00' },
    Tuesday: { open: '09:00', close: '18:00' },
    Wednesday: { open: '09:00', close: '18:00' },
    Thursday: { open: '09:00', close: '18:00' },
    Friday: { open: '09:00', close: '18:00' },
    Saturday: { open: '09:00', close: '12:00' },
    Sunday: { open: null, close: null }, // Closed all day
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch(`http://${process.env.HOSTNAME}:${process.env.PORT}/send-email`, {
    fetch('http://localhost:8080/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log('Success:', data);
      // Reset form or show a success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: 'how can we serve you?',
      });
      // Optionally, inform the user that the email was successfully sent
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle or display the error
      // Optionally, inform the user about the error
    });
  };


  return (
    <>
    <div className={`main-content ${menuOpen ? 'show-menu' : ''}`}>

    <div className="about-image-container">
                  <img className="about-img" src={splashImage} alt="About Custom Italian Cabinets" />
                  <div className="overlay-text">Contact us!</div>
                </div>
      <div className = "contact">
        
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required onChange={handleChange} value={formData.name} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
      
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required onChange={handleChange} value={formData.phone} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required onChange={handleChange} value={formData.message}></textarea>
        
        <button type="submit">Send</button>
      </form>
      
      <div className="contact-section">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> <a href="tel:+19545944641">(954) 594-4641</a>
</p>
        <p className="contact-email"><strong>Email:</strong> <a href="mailto:info@customitaliancabinets.com">info@&#8203;customitaliancabinets.com
        </a></p>
          
        <p><strong>Address:</strong><br />
            <a href="https://www.google.com/maps/search/?api=1&query=5405+NW+102nd+Avenue,+Unit+208,+Sunrise,+FL+33351" target="_blank">
              5405 NW 102nd Avenue<br />
            Unit 208<br />
            Sunrise, FL 33351
            </a>
        </p>

        <div className='map-container'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d
          3581.813347771236!2d-80.23588672307143!3d26.137628192966503!2m3!1f0!2f0!3f0!3m2!1i1024!2i
          768!4f13.1!3m3!1m2!1s0x88d90655993d4d09%3A0x737ca8a6c9dd22c7!2sSunPro%20Custom%20Italian%20C
          abinets!5e0!3m2!1sen!2sus!4v1710295154014!5m2!1sen!2sus"
          width="400" height="300" style= {{border:'0'}} allowfullscreen="" loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <h3>Hours</h3>
        <p>Monday: 9am - 6pm</p>
        <p>Tuesday: 9am - 6pm</p>
        <p>Wednesday: 9am - 6pm</p>
        <p>Thursday: 9am - 6pm</p>
        <p>Friday: 9am - 6pm</p>
        <p>Saturday: 9am - 12pm</p>
        <p>Sunday: Closed</p>
      </div>
      </div>
      </div>
    </>
  );
}

export default ContactForm;