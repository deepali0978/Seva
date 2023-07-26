import React from 'react';

function ReturnBack() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #ffede5, #ffd7c7)', // Background gradient
    fontFamily: 'Your Attractive Font, sans-serif',
    color: '#333',
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Text shadow
    letterSpacing: '2px', // Increased letter spacing
  };

  const subtitleStyle = {
    fontSize: '24px',
    fontStyle: 'italic',
    color: '#666',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Text shadow
    marginBottom: '40px', // Increased bottom margin
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Image shadow
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '30px',
    background: 'linear-gradient(to right, #ff8a00, #ff6000)', // Button gradient
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Button shadow
    transition: 'transform 0.3s ease', // Button hover transition
  };

  

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Thank You!</h1>
      <p style={subtitleStyle}>We have recorded your response</p>
      <p style={subtitleStyle}>We will get back to you within 24 hours</p>
      <img src="https://www.shutterstock.com/image-vector/food-donations-glyph-icon-charity-260nw-1451499896.jpg" alt="Illustration" style={imageStyle} />
     
    </div>
  );
}

export default ReturnBack;
