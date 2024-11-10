function WelcomeMessage() {
    return (
      <div
        style={{
          backgroundColor: '#f0f8ff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '20px auto',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1
          style={{
            color: '#2c3e50',
            fontSize: '2.5rem',
            marginBottom: '15px',
          }}
        >
          {"Hello everyone, I am learning React at ALX!"}
        </h1>
        <p
          style={{
            color: '#34495e',
            fontSize: '1.2rem',
            marginBottom: '10px',
          }}
        >
          This is a simple JSX component.
        </p>
        <p
          style={{
            color: '#7f8c8d',
            fontSize: '1rem',
          }}
        >
          I am learning about JSX!
        </p>
      </div>
    );
  }
  

export default WelcomeMessage;