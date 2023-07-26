import './App.css';
import{Routes,Route} from "react-router-dom"
import { BrowserRouter} from 'react-router-dom';
import Header from './NavBar/Header'
import Home from './NavBar/Home'
import ContactUs from './NavBar/ContactUs';
import AboutUs from './NavBar/AboutUs';
import Donate from './Component/Donate'
import Recieve from './Component/Recieve';
import ReturnBack from './Component/ReturnBack';
import Jump from 'react-reveal/Jump';
function App() {
  return (
    <div className="App">
      <Jump>
      <div className='maindiv'>
    <h1 class="mainheading">Seva</h1>
    </div>
    </Jump>
     <div className="mainbody">
      <BrowserRouter>
      <div>
      <Header></Header>
      </div>
      <hr></hr>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path='/Donate' element={<Donate/>}/>
      <Route path='/Recieve' element={<Recieve/>}/>
      <Route path='/returnBack' element={<ReturnBack/>}/>

</Routes>
</BrowserRouter>
     </div>
    </div>
  );
}

export default App;
