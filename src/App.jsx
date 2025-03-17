import { useState } from 'react';
import './App.css';

function App() {
  

  return (
    <>
    <div id="logo">
    <img src="./public/WhatsApp_Image_2025-02-28_at_21.50.10_86d30eac-removebg-preview 2.svg"/>
    <p id="name"><span id="club">CLUB</span> <span>MATHEMATICA</span></p>
   </div>
       
   
    
    
   
    
      <div id="nav">
      
      <p>Home  </p>
      
      
      <p>Infinitum  </p>
      
      
      <p>Events  </p>
     
      
      <p>Our Team </p>
    
      
      <p>Gallery  </p>
      
      
        <button>
        About Us
      </button>
     
      
      <button>
        Contact Us
      </button>
      </div>
      
   
    <img id="page1" src="./public/Component 7.svg"/>
    
    <img id="page2" src="./public/Component 5.svg"/>
   
    

    <div id="pics">
    <p id ="description">
    <b>About C M</b><br/>
    <p>At <strong>Club Mathematica, NIT Calicut</strong>, we believe that mathematics is more than just numbers—it’s a language of patterns, a tool for innovation, and a bridge between logic and creativity. As a vibrant cultural club, we create a dynamic space where intellectual curiosity meets exhilarating competition.</p>

<p>Through engaging events, challenging puzzles, and thrilling contests, we inspire students to embrace problem-solving, strategic thinking, and the sheer joy of discovery. Our club thrives on the spirit of collaboration, learning, and the relentless pursuit of excellence. Whether you’re a math enthusiast, a puzzle solver, or just someone who loves a good challenge, <strong>Club Mathematica</strong> is where you belong.</p>

<p>Join us in celebrating the beauty of mathematics beyond textbooks—where logic meets culture, and knowledge turns into an adventure!</p>

<p><strong>Motto:</strong> <em>Unravel. Compete. Conquer.</em></p>


    </p>
    <div id="infi_flex">
    <img id="infi" src="./public/Component 4.svg"/>
    <button className="site">Visit Site</button>
    </div>
    </div>
    

    
   
    <div id="deco">
    
    <h2 id="head">Dive into the realm of Mathematica!</h2>
    <button className='site1'>Know More!</button>
    
    </div>
    <div id="footer">
      <img id="logo" src="./public/Component 9.svg"/>
      <p id="quick">
        <h3>Quick Links</h3>
        
        <h4>Home</h4>
        <h4>Infinitum</h4>
        <h4>Events</h4>
        <h4>Our Team</h4>
        <h4>Gallery</h4>
      </p>
      <p id="credits">
      <h3>Contact Us</h3>
        
        <h4>Phone:</h4>
        <h5>+919778112422</h5>
        <h4>Email:</h4>
        <h5>clubmath@nitc.ac.in</h5>
        <h4>Follow Us On:</h4>
        <div id="icons">
        <img id="icon1"src="insta.svg"/>
        <img id="icon2"src="facebook.svg"/>
        </div>
      </p>
    </div>

    </>
    
  )
}

export default App
