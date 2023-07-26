import React from 'react'
import '../App.css'
import Services from '../Component/Services'
import Donate from '../Images/donate.jpg'
import Receive from '../Images/receive.jpeg'
import Fighting from '../Images/fighting-hunger.jpg'
import { Link } from 'react-router-dom'
import{Fade} from 'react-reveal'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
import Reveal from 'react-reveal/Reveal';



function Home() {
  return (
    
    <div className='maindivhead'>
      <Fade>
      <div className='homeD1'>
        <div className='hometext'>
        <Zoom left>
          <h1>When good food is rejected upon delivery</h1>
          <h1>Let Seva help you donate it...</h1>
          <h1>"less waste and less hunger"</h1>
          </Zoom>
        </div>
      </div>
      </Fade>
      
      <div >
        <Bounce><h1 style={{ fontFamily: 'cursive', textAlign: 'center' }}>Our Services</h1></Bounce>
        <div className='Servicesdiv1'>
        <Roll left>
          <Link to='/Donate'>
            <Services heading='Donate Now' img={Donate} btn='Donate Now'></Services>
          </Link>
          </Roll>
          <Roll right>
          <Link to='/Recieve'>
            <Services heading='Recieve Now' img={Receive} btn='Recieve Now'></Services>
          </Link>
          </Roll>
          
        </div>
      </div>
      
      <div></div>
      <br></br>
      <a href="https://news.harvard.edu/gazette/story/2021/08/how-food-donations-can-help-fight-hunger-and-climate-change/" target='/self'><Bounce left><div style={{ height: '350px', width: 'auto', borderRadius: '4px' }} className='fighting'></div></Bounce></a>
      
      <div className="glassBackground">
  <h1 style={{ textAlign: 'center',fontFamily:'cursive' }}>Our Social Works</h1>
  
  <div className="socialMedia">
 <Fade bottom> 
    <div className="social1"></div>
    </Fade>
    <Fade bottom> 
    <div className="social2"></div>
    </Fade>
    <Fade bottom> 
    <div className="social3"></div>
    </Fade>
    <Fade bottom> 
    <div className="social4"></div>
    </Fade>
    <Fade bottom> 
    <div className="social5"></div>
    </Fade>
    <Fade bottom> 
    <div className="social6"></div>
    </Fade>
  </div>
  
</div>

<Bounce><h1 className="impactText">EVERY MEAL YOU PROVIDE IS A STEP TOWARDS A HUNGER-FREE WORLD</h1></Bounce>
<Bounce left><div style={{ height: '350px', width: 'auto', borderRadius: '4px' }} className='fighting1'></div></Bounce>
<div style={{ backgroundColor: 'black' }}>
  <h1 style={{ textAlign: 'center', fontFamily: 'cursive' }}>Contact Us</h1>
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
  <a href="mailto:deepalisharma812@gmail.com">
      <div>
      
        <img src="https://i.pinimg.com/originals/9d/70/5d/9d705dc0aa454877eb127efa7271ae3b.png" height="120px" width="120px" alt="Email"></img>
        
      </div>
      </a>
    <a href="tel:8626884838">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh16syri7aI-8eJQbAedJrfLD_l8hSLAIrO4-Vw0RyQBHelQtTcuJrNPvTmdoHDRh1Nfo&usqp=CAU" height="120px" width="120px">
        </img>
      </div>
    </a>
  </div>
  </div>
  

    </div>
  )
}

export default Home;
