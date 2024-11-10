function About() {
  const aboutStyle = {
    padding: '20px',
  };
  
  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
  };
  
  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#555',
  };
  

    return (
      <div style={aboutStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
      </div>
    );
  }

  export default About;