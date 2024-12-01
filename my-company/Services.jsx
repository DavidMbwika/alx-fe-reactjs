function Services() {

  const servicesStyle = {
    padding: '20px',
  };
  
  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
  };
  
  const ulStyle = {
    listStyleType: 'none',
    padding: '0',
  };
  
  const liStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px',
  };
  
    return (
      <div style={servicesStyle}>
        <h1 style={headingStyle}>Our Services</h1>
        <ul style={ulStyle}>
          <li style={liStyle}>Technology Consulting</li>
          <li style={liStyle}>Market Analysis</li>
          <li style={liStyle}>Product Development</li>
        </ul>
      </div>
    );
  }

  export default Services;