import React, { useState } from 'react';

function ContactForm({ menuOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'how can we serve you',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://${process.env.HOSTNAME}:${process.env.PORT}/send-email`, {
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
      <div className = "contact">
        
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required onChange={handleChange} value={formData.name} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
      
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required onChange={handleChange} value={formData.message}></textarea>
        
        <button type="submit">Send</button>
      </form>
      
      <div className="contact-section">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> <a href="tel:+19545944641">(954) 594-4641</a>
</p>
        <p class="contact-email"><strong>Email:</strong> <a href="mailto:info@customitaliancabinets.com">info@&#8203;customitaliancabinets.com
        </a></p>
          
        <p><strong>Address:</strong><br />
            5405 NW 102nd Avenue<br />
            Unit 208<br />
            Sunrise, FL 33351
        </p>
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