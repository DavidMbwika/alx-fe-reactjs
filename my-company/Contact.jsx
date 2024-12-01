import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const contactStyle = {
    padding: '20px',
  };
  
  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };
  
  const textareaStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  };
  
  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  
  

  return (
    <div style={contactStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={formStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;