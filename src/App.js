import logo from './logo.svg';
import './App.css';
import './components/Navbar.css'
import {useRef,useState,useEffect} from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Accomplishments from './components/Accomplishments';
import About from './components/About';
import Hobby from './components/Hobby';
import Contact from './components/Contact';

function App() {
    const home=useRef();
    const projects=useRef();
    const accomplishments=useRef();
    const about=useRef();
    const hobby=useRef();
    const contact=useRef();

    const scrollHandler = (elmRef)=>{
      console.log(elmRef.current)
      window.scrollTo({top:elmRef.current.offsetTop, behavior:'smooth'})
    }
    

  return (
    <div className="App">
     {/* <Navbar/> */}
     <div className='navbar'>
       <div onClick={()=>scrollHandler(home)} className='navbar-element'>Home</div>
       <div onClick={()=>scrollHandler(projects)} className='navbar-element'>Projects</div>
       <div onClick={()=>scrollHandler(about)} className='navbar-element'>About</div>
       <div onClick={()=>scrollHandler(contact)} className='navbar-element'>Contact</div>
    </div>
    <div ref={home}>
     <Home/>
     </div>
     <div ref={projects}>
     <Projects/>
     </div>
    
    <Accomplishments/>
   
    <div ref={about}>
      <About />
    </div>
    
    <Hobby/>
 
    <div ref={contact}>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
