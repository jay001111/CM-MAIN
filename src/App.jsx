import { useState, useEffect } from 'react';
import {Reveal,Animate_1,Animate_2,Animate_3,Animate_4,Animate_5} from './AnimatedContent';

import './assets/css/bootstrap.min.css';

import './assets/css/slicknav.css';
import './assets/css/nivo-lightbox.css';
import './assets/css/animate.css';

import './assets/css/responsive.css';
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";





function App() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  const handleClick = () => {
    if(!isAnimationEnd) return;
    setIsAnimationEnd(!isAnimationEnd);
    setClickCount(true);
    const elements = document.querySelectorAll(".items"); // Target all items
    elements.forEach((element) => {
      element.classList.remove("animate__fadeInDown");
      element.classList.add("animate__fadeOutUp");
    });
    const parts=document.getElementById("cross");
    parts.classList.remove("animate__fadeInRight");
    parts.classList.add("animate__fadeOutRight");
    const parts1=document.getElementById("pop");
    parts1.classList.remove("animate__fadeInLeft");
    parts1.classList.add("animate__fadeOutLeft");
    
    
    
  };
  const [clickCount, setClickCount] = useState(false);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const animationHandle= () =>{
    
     setIsAnimationEnd(!isAnimationEnd);
     if(clickCount&&!isAnimationEnd) setIsOpen(!isOpen);
    
    
  }
  const looseClick = () => {
    setIsAnimationEnd(false);
    setClickCount(false);
    const elements = document.querySelectorAll(".items"); // Target all items
    elements.forEach((element) => {
      element.classList.remove("animate__fadeOutUp");
      element.classList.add("animate__fadeInUp");
    });
    const parts=document.getElementById("cross");
    parts.classList.remove("animate__fadeOutRight");
    parts.classList.add("animate__fadeInRight");
    const parts1=document.getElementById("pop");
    parts1.classList.remove("animate__fadeOutLeft");
    parts1.classList.add("animate__fadeInLeft");
    setIsOpen(!isOpen);
    

  };
  const stopClick = () => {
    
    const part3=document.getElementById(".dropdown_open");
    part3.style.display="none";
    const part5=document.getElementById(".drop_list");
    
    

  };
  // const ref=useRef(null);
  // const isInView=useInView(ref,{once:true});
  // const mainControls=useAnimation();
  // useEffect(()=>{
  //   if(isInView){
  //     mainControls.start("visible");
  //   }
  // },[isInView]);

  
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    
  };


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("show"); // Add class when in view
  //         }
  //       });
  //     },
  //     { threshold: 0.2 } // Triggers when 20% of the section is visible
  //   );

  //   const items = sectionRef.current.querySelectorAll(".services-item");
  //   items.forEach((item) => observer.observe(item));

  //   return () => {
  //     items.forEach((item) => observer.unobserve(item));
  //   };
  // }, []);




  return (
    <>
      <div className={isOpen ? "nav_core_open" : "nav_core"} >
        <div id="logo1">
          <img src="./public/WhatsApp_Image_2025-02-28_at_21.50.10_86d30eac-removebg-preview 2.svg" />
          <p id="name"><span id="club">CLUB</span> <span>MATHEMATICA</span></p>
        </div>






        <div className={isOpen ? "nav-menuopen" : "nav-menu"}>


          <p className={isOpen ? "elements_open" : "elements"}> Home  </p>


          <p className="elements">Infinitum  </p>


          <p className="elements">Events  </p>


          <p className="elements">Our Team </p>


          <p className="elements">Gallery  </p>


          <button className="elements">
            About Us
          </button>


          <button className="elements">
            Contact Us
          </button>
          <div className="menu-toggle" onClick={looseClick} >
            ☰
          </div>
        </div>

      </div>
      <div 
  className={isOpen ? 'dropdown_open' : "dropdown"} 
  
>

      
        
       
        <Animate_5  width="90%" delay={0}>
        <div id='drop_list'>
        <img id="pop" className="animate__animated animate__fadeInLeft"src="./public/WhatsApp_Image_2025-02-28_at_21.50.10_86d30eac-removebg-preview 2.svg" />
        <button id="cross" className="animate__animated animate__fadeInRight"  onClick={handleClick}> ☰
        </button>
          <p  className=' items animate__animated animate__fadeInDown' style={{animationDelay:"0.3s"}}>Home</p>
          <p className=' items animate__animated animate__fadeInDown' style={{animationDelay:"0.5s"}}>Infinitum</p>
          <p className=' items animate__animated animate__fadeInDown' style={{animationDelay:"1s"}}>Events</p>
          <p  className=' items animate__animated animate__fadeInDown' style={{animationDelay:"1.2s"}}>Our Team</p>
          <p  className=' items animate__animated animate__fadeInDown' style={{animationDelay:"1.5s"}}>Gallery</p>
          <p  className=' items animate__animated animate__fadeInDown' style={{animationDelay:"1.7s"}}>About Us</p>
          <p  className=' items animate__animated animate__fadeInDown'onAnimationEnd={animationHandle} style={{animationDelay:"1.9s"}}>Contact Us</p>
        </div>
         </Animate_5>
      </div>
      

     


      <img id="page1" src="./public/Component 7.svg" />

      <img id="page2" src="./public/Component 5.svg" />



      <div id="pics">
        <p id="description">
          <b>About C M</b><br />
          <p>At <strong>Club Mathematica, NIT Calicut</strong>, we believe that mathematics is more than just numbers—it’s a language of patterns, a tool for innovation, and a bridge between logic and creativity. As a vibrant cultural club, we create a dynamic space where intellectual curiosity meets exhilarating competition.</p>

          <p>Through engaging events, challenging puzzles, and thrilling contests, we inspire students to embrace problem-solving, strategic thinking, and the sheer joy of discovery. Our club thrives on the spirit of collaboration, learning, and the relentless pursuit of excellence. Whether you’re a math enthusiast, a puzzle solver, or just someone who loves a good challenge, <strong>Club Mathematica</strong> is where you belong.</p>

          <p>Join us in celebrating the beauty of mathematics beyond textbooks—where logic meets culture, and knowledge turns into an adventure!</p>

          <p><strong>Motto:</strong> <em>Unravel. Compete. Conquer.</em></p>


        </p>
        <div id="infi_flex">
          <img id="infi" src="./public/Component 4.svg" />
          <button className="site">Visit Site</button>
        </div>
      </div>
   
      <div id="team">
    
        <div id="event">

          <b>GALLERIA</b>
        </div>
        <div id="boxes">
        <Animate_2 width="100%" delay={0.2}>
          <div className="box"></div>
          </Animate_2>
          <Animate_2 width="100%" delay={0.6}>
          <div className="box"></div>
          </Animate_2>
          <Animate_2 width="100%" delay={1.1}>
          <div className="box"></div>
          </Animate_2>
          <Animate_2 width="100%" delay={0.2}>
          <div className="box"></div>
          </Animate_2>
          <Animate_2 width="100%" delay={0.6}>
          <div className="box"></div>
          </Animate_2>
          <Animate_2 width="100%" delay={1.1}>
          <div className="box"></div>
          </Animate_2>
          <Animate_2 width="100%" delay={0.2}>
          <div className="box"></div>
          </Animate_2>
          <Animate_2 width="100%" delay={0.6}>
          <div className="box"></div>
          </Animate_2>
          <Animate_2 width="100%" delay={1.1}>
          <div className="box"></div>
          </Animate_2>
        </div>

      </div>
      
      <div id="events_">
        <div id="black-sheet">
          <div id="event_title">
            <span id="our1"><b>EVENTS</b></span>
            <span id="events1"><b>'2024&25</b></span>
          </div>
        </div>
      </div>
      
      <section id="services"  className="services section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                className="section-title wow fadeInUp cluboutlooks animated"
                data-wow-delay="0.2s"
                style={{ visibility: "visible", animationDelay: "0.2s" }}
              >
                <span id="Club">Club</span> Outlook
              </h1>
            </div>
          </div>
          <div className="services-wrapper">
          <Reveal width="100%" delay={1.2}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "1.2s" }}>
              <div className="icon">
                <i className="lni lni-consulting"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Diligent and dependable executives</a></h3>
              </div>
            </div>
            </Reveal>
             <Reveal width="100%" delay={0.2}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.2s" }}>
              <div className="icon">
                <i className="lni lni-network"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Adept and aspiring team</a></h3>
              </div>
              
            </div> 
            </Reveal><Reveal width="100%" delay={0.4}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.4s" }}>
              <div className="icon">
                <i className="lni lni-code-alt"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Proficient technical team</a></h3>
              </div>
              
            </div></Reveal> <Reveal width="100%" delay={0.6}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.6s" }}>
              <div className="icon">
                <i className="lni lni-pallet"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Ingenious and idealistic designers</a></h3>
              </div>
            </div>
            </Reveal> <Reveal width="100%" delay={0.8}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "0.8s" }}>
              <div className="icon">
                <i className="lni lni-bar-chart"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Analytical marketing and event organization team</a></h3>
              </div>
            </div> </Reveal><Reveal width="100%" delay={1}>
            <div className="services-item animate__animated animate__fadeInDown" style={{ animationDelay: "1s" }}>
              <div className="icon">
                <i className="lni lni-pencil-alt"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Articulate content writers</a></h3>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
       
      </section>
      
      <section id="contact-us" className="section-padding" data-aos="zoom-in">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1 className="section-title wow fadeInUp contactuss" data-wow-delay="0.2s">Contact Us</h1>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div className="container-form wow fadeInLeft" data-wow-delay="0.2s">
                <div className="form-wrapper">
                  <form role="form" action="https://formspree.io/f/xvovqdkl" method="POST">
                    <div className="row">
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input type="text" className="form-control name" id="name1" name="name" placeholder="Name" required data-error="Please enter your name" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input type="email" className="form-control email" id="email" name="_replyto" placeholder="Email" required data-error="Please enter your Email" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input type="tel" className="form-control" id="msg_subject" name="subject" placeholder="Subject" required data-error="Please enter your message subject" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="4" id="message" name="message" required data-error="Write your message"></textarea>
                        </div>
                        <div className="form-submit">
                          <button type="submit" className="btn btn-common" value="Send" id="form-submit">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i> Send Us Now
                          </button>
                          <div id="msgSubmit" className="h3 text-center hidden"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



 
      <div className='deco'>
      <Animate_1  width="100% " delay={0}>
        <div className="dive">
        <h2 id="head">Dive into the realm of Mathematica!</h2>
        <button className='site1'>Know More!</button>
        </div>
        </Animate_1>
      </div>
      
      <section className="counter-section section-padding">
  <div className="container">
    <div className="row">
      
    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
  <Animate_4 width="100%" delay="0.3">
    <div className="counter wow fadeInRight" data-wow-delay="0.3s">
      <div className="icon"><i className="lni lni-map"></i></div>
      <p>INFINITUM</p>
    </div>
  </Animate_4>
</div>

<div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
  <Animate_4 width="100%" delay="0.6">
    <div className="counter wow fadeInRight" data-wow-delay="0.6s">
      <div className="icon"><i className="lni lni-timer"></i></div>
      <p>January 2024</p>
    </div>
  </Animate_4>
</div>

<div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
  <Animate_4 width="100%" delay="0.9">
    <div className="counter wow fadeInRight" data-wow-delay="0.9s">
      <div className="icon"><i className="lni lni-users"></i></div>
      <p>30,000+ Participants</p>
    </div>
  </Animate_4>
</div>

<div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
  <Animate_4 width="100%" delay="1.2">
    <div className="counter wow fadeInRight" data-wow-delay="1.2s">
      <div className="icon"><i className="lni lni-cup"></i></div>
      <p>1 lakh worth prizes</p>
    </div>
  </Animate_4>
</div>
    </div>
  </div>
</section>

      <div id="footer">
        <img id="logo" src="./public/Component 9.svg" />
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
            <img id="icon1" src="insta.svg" />
            <img id="icon2" src="facebook.svg" />
          </div>
        </p>
      </div>

    </>

  )
}


export default App;
