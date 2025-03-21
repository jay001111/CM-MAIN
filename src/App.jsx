import { useState } from 'react';
import './App.css';
const services = [
  { icon: "lni lni-consulting", text: "Diligent and dependable executives", delay: "1.2s" },
  { icon: "lni lni-network", text: "Adept and aspiring team", delay: "0.2s" },
  { icon: "lni lni-code-alt", text: "Proficient technical team", delay: "0.4s" },
  { icon: "lni lni-pallet", text: "Ingenious and idealistic designers", delay: "0.6s" },
  { icon: "lni lni-bar-chart", text: "Analytical marketing and event organization team", delay: "0.8s" },
  { icon: "lni lni-pencil-alt", text: "Articulate content writers", delay: "1s" }
];



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <div className={isOpen ? "nav_core_open":"nav_core"} >
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
          <div className="menu-toggle" onClick={toggleMenu} >
            ☰
          </div>
        </div>
       
      </div>
      <div className={isOpen ? 'dropdown_open' : 'dropdown'}>
          <div id="menu_drop"> ☰</div>
          <div className='drop_list' onClick={toggleMenu}>
            <p id="items">Home</p>
            <p id="items">Infinitum</p>
            <p id="items">Events</p>
            <p id="items">Our Team</p>
            <p id="items">Gallery</p>
          </div>
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
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>

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
      <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title-header text-center">
            <h1
              className="section-title wow fadeInUp cluboutlooks animated"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                WebkitAnimationDelay: "0.2s",
                MozAnimationDelay: "0.2s",
              }}
            >
              Club Outlook
            </h1>
          </div>
        </div>
      </div>
      <div className="row services-wrapper">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div
              className="services-item wow fadeInDown animated"
              data-wow-delay={service.delay}
              style={{
                visibility: "visible",
                animationDelay: service.delay,
                WebkitAnimationDelay: service.delay,
                MozAnimationDelay: service.delay,
              }}
            >
              <div className="icon">
                <i className={service.icon}></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">{service.text}</a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <section id="services" className={`${styles.services} section-padding`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1
              className={`${styles.sectionTitle} wow fadeInUp`}
              data-wow-delay="0.2s"
              style={{ visibility: "visible", animationDelay: "0.2s" }}
            >
              Club Outlook
            </h1>
          </div>
        </div>

        <div className={styles.servicesWrapper}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.servicesItem} animate__animated animate__fadeInDown`}
              style={{ animationDelay: service.delay }}
            >
              <div className={styles.icon}>
                <i className={service.icon}></i>
              </div>
              <div className={styles.servicesContent}>
                <h3>
                  <a href="#">{service.text}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      <div id="deco">

        <h2 id="head">Dive into the realm of Mathematica!</h2>
        <button className='site1'>Know More!</button>

      </div>
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

export default App
