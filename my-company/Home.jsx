function Home() {
  const homeStyle = {
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
      <div style={homeStyle}>
        <h1 style={headingStyle}>Welcome to Our Company</h1>
        <p style={paragraphStyle}>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }

  export default Home;