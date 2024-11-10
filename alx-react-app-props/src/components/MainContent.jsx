function MainContent() {
  return (
    <main
      style={{
        backgroundColor: '#f0f0f0',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '18px',
          color: '#333',
          fontStyle: 'italic',
        }}
      >
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;