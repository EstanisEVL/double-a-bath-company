/*---- Imported assets: ----*/
import logo from '../../assets/img/footer-brand-logo.png';
import SocialIcons from './SocialIcons';

import SocialsIconList from './SocialsIconList';

const Footer = () => {
  return(
    <footer className='footer-container' id='footer' >
      <div className='footer--contact-container'>
        <a href='/'>
          <img
          className='footer--brand-img'
          src={ logo } 
          alt='brand logo'
          />
        </a>
        <div className='footer--consultation-txt'>
          <p>Free consultation</p>
        </div>
        <div className='footer--phone'>
          <p>786-384-1030</p>
        </div>
      </div>

      <div className='footer--info-and-socials'>
        <div>
          <SocialIcons icons={ SocialsIconList }/>
        </div>
        <div className='footer--address'>
          <p>Miami, Miramar, Ft. Lauderdale, Florida</p>
        </div>
        <div className='footer--copyright'>
          <p>© Double Abath company. All Rights Reserved 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;