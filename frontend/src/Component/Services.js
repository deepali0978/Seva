import React from 'react'
import'../App.css'
function Services(props) {
  return (
    <div>
        <div className='Servicesdiv2'>
        <h1>{props.heading}</h1>
        <img src={props.img} className='Serviceimg'></img>
        <button className='Servicebtn'><b>{props.btn}</b></button>
        </div>
    </div>
  )
}

export default Services