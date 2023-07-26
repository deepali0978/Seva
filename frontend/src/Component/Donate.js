import React from 'react';
import{useState} from 'react'
import axios from 'axios'
import Fade from 'react-reveal'
function Donate() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color:'black'
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
    radio: {
      marginRight: '5px',
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
    },
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [type, setType] = useState('');
  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const formattedPhone = phone || 'N/A';

    axios
      .post('http://localhost:4002/donation', {
        name,
        email,
        phone: formattedPhone,
        city,
        pin,
        type,
        food,
        quantity,
      })
      .then((res) => {
        console.log(res.data);
        setName('');
        setEmail('');
        setPhone('');
        setCity('');
        setPin('');
        setQuantity('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={styles.container}>
      <h1>Donate Now</h1>
      <Fade bottom>
      <div >
      
        <form style={styles.form} onSubmit={handleClick}>
          <label style={styles.label} >Name</label>
          <input type="text" style={styles.input} onChange={(e)=>setName(e.target.value)} required/>
          <label style={styles.label} >Email</label>
          <input type="email" style={styles.input} onChange={(e)=>setEmail(e.target.value)} required/>
          <label style={styles.label}>Phone Number</label>
          <input type="tel" style={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]*" required />
          <label style={styles.label}>City</label>
          <input type="text" style={styles.input} onChange={(e)=>setCity(e.target.value)} required/>
          <label style={styles.label}>PinCode</label>
          <input type="text" style={styles.input} onChange={(e)=>setPin(e.target.value)} required/>
          <label style={styles.label}>Type Of Food</label>
          <br />
          <input type="radio" name="type" value="Veg" checked={type === 'Veg'} style={styles.radio} onChange={(e)=>setType(e.target.value)}/>
          <label>Veg</label>
          <input type="radio" name="type" style={styles.radio} value="Non-Veg" checked={type === 'Non-Veg'}onChange={(e)=>setType(e.target.value)}/>
          <label>Non-Veg</label>
          <br />
          <label style={styles.label}>Food</label><br/>
          <input type="radio" name="cook" value="Cooked" checked={food === 'Cooked'} style={styles.radio} onChange={(e)=>setFood(e.target.value)} required/>
          <label>Cooked</label>
          <input type="radio" name="cook" value="unCooked" checked={food === 'unCooked'} style={styles.radio} onChange={(e)=>setFood(e.target.value)} required/>
          <label>unCooked</label>
          <br />
          <label style={styles.label}>Quantity</label>
          <select id="cars" style={styles.input} onChange={(e)=>setQuantity(e.target.value)} required>
            <option value="10-20">10-20</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
            <option value="Above 50">Above 50</option>
          </select>

          <button
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
          >
            Donate
          </button>
        </form>
      </div>
      </Fade>
    </div>
  );
}

export default Donate