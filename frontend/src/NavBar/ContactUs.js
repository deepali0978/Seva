import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import Flip from 'react-reveal/Flip';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const response = await axios.post('/api/contact', { name, email, feedback });
      console.log(response.data); 
      
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className='contact'>
      <Flip top>
      <div className='contactUs'>
        <h1 style={{ display: 'flex', justifyContent: 'center', fontFamily: 'cursive' }}>Contact Us</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor='name'>Name:</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      id='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor='email'>Email Id:</label>
                  </td>
                  <td>
                    <input
                      type='email'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor='feedback'>Feedback:</label>
                  </td>
                  <td>
                    <textarea
                      id='feedback'
                      rows='9'
                      cols='30'
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colSpan='2' style={{ textAlign: 'center' }}>
                    <button type='submit' className='Servicebtn'>
                      SUBMIT
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      </Flip>
    </div>
  );
}

export default ContactUs;
