// src/components/MainSection.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './MainSection.css'

const MainSection = () => (
  <Container className="container text-center my-5">
    <h1 className='heading'>Your Startup’s legal partner. Simplified, transparent, automated. <span style={{ color: 'orange' }}>From Start to Scale.</span></h1>
    <p className="para">
      The only end-to-end platform offering integrated legal solutions that combines human intelligence and technology to automate all your legal and taxation complexities and provides you with a peace of mind to focus on your startup.
    </p>
    <Button variant="primary" className="button-container" size="lg">Book a demo</Button>
    <div className="mt-5 ">
      <h5>TRUSTED BY STARTUPS <span style={{ color: 'orange' }}>LIKE YOURS</span></h5><hr className='line-through'/>
      <div className="ml-5 w-50 logo-container">
        <img src="https://res.cloudinary.com/dhwydorji/image/upload/v1722177557/pwc-removebg-preview_homfed.png" alt="PWC" />
        <img src="https://res.cloudinary.com/dhwydorji/image/upload/v1722178546/zerodha-removebg-preview_nukcnw.png" alt="Zerodha careers" />
        <img src="https://res.cloudinary.com/dhwydorji/image/upload/v1722178547/boat-removebg-preview_okdlqb.png" alt="Boat" />
        <img src="https://res.cloudinary.com/dhwydorji/image/upload/v1722229783/logo_phonePe_npqo22.png" alt="Phonepay" />
        <img src="https://res.cloudinary.com/dhwydorji/image/upload/v1722178547/rapido-removebg-preview_zg3hur.png" alt="Rapido" />
        <img src="https://res.cloudinary.com/dhwydorji/image/upload/v1722178547/lenskarts-removebg-preview_c4hz1m.png" alt="Lenskart" />
      </div>
    </div>
  </Container>
);

export default MainSection;
