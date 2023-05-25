import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
   
    <footer className="footer bg-dark p-5">
         
      <Container>
       
        <div  className="social-icons ">
            <p className='text-light fs-5'>Contact us on:</p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.icon-icons.com/icons2/2108/PNG/96/facebook_icon_130940.png" className='me-3' width="30px"height="30px" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/96/youtube_logo_icon_168737.png" className='me-3' width="30px"height="30px" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.icon-icons.com/icons2/836/PNG/96/Instagram_icon-icons.com_66804.png" className='me-3' width="30px"height="30px" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.icon-icons.com/icons2/1211/PNG/96/1491579542-yumminkysocialmedia22_83078.png" className='me-3' width="30px"height="30px" alt="Twitter" />
          </a>
        </div>
      </Container>
    </footer>

  );
};

export default Footer;
