import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Fade from 'react-reveal'
const Receive = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: 'black'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '500px',
      width: '100%',
    },
    label: {
      fontWeight: 'bold',
      marginTop: '10px',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid gray',
      marginBottom: '10px',
      width: '100%',
    },
    button: {
      backgroundColor: 'green',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      marginTop: '20px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: 'darkgreen',
    }
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showReceivedData, setShowReceivedData] = useState(false);
  const [receivedData, setReceivedData] = useState([]);
  

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4002/api/receive', {
        name,
        email,
        phone,
        city,
        pincode,
        quantity,
      })
      .then((res) => {
        console.log(res.data);
        setName('');
        setEmail('');
        setPhone('');
        setCity('');
        setPincode('');
        setQuantity('');
        setShowReceivedData(true);
        window.location.href = '/returnBack';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDonationData = (city, pincode, quantity) => {
    axios
      .get('http://localhost:4002/api/donation', {
        params: {
          city,
          pincode,
          quantity,
        },
      })
      .then((res) => {
        console.log(res.data);
        setReceivedData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDonationData(city, pincode, quantity);
  }, [city, pincode, quantity]);
  

  return (
    <div style={styles.container}>
      <h1>Receive Now</h1>
      <Fade bottom>
      <div>
        <form style={styles.form} onSubmit={handleClick}>
          <label style={styles.label}>Name</label>
          <input type="text" style={styles.input} value={name} onChange={(e) => setName(e.target.value)} required />
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label style={styles.label}>Phone Number</label>
          <input type="tel" style={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)}  required/>
          <label style={styles.label}>City</label>
          <input type="text" style={styles.input} value={city} onChange={(e) => setCity(e.target.value)}  required/>
          <label style={styles.label}>PinCode</label>
          <input type="number" style={styles.input} value={pincode} onChange={(e) => setPincode(e.target.value)} required/>
          <label style={styles.label}>Quantity</label>
          <select id="cars" style={styles.input} onChange={(e) => setQuantity(e.target.value)} required>
            <option value="10-20">10-20</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
            <option value="Above 50">Above 50</option>
          </select>
          <br />
      <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          >
            Post
          </button>
        </form>
      </div>
      </Fade>
      
    </div>
  );
};

export default Receive;

