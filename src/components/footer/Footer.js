/*---- Imported assets: ----*/
import logo from '../../assets/img/footer-brand-logo.png';
import SocialIcons from './SocialIcons';

import SocialsIconList from './SocialsIconList';

const Footer = () => {
  return(
    <footer className='footer-container'>
      
      <div className='footer--contact-container'>
        <div>
          <img
          src={ logo } 
          alt='brand logo'
          />
        </div>
        <div className='footer--consultation-txt'>
          <p>Free consultation</p>
        </div>
        <div className='footer--phone'>
          <p>1-800-123-1234</p>
        </div>
      </div>

      <div className='footer--info-and-socials'>
        <div>
          <SocialIcons icons={ SocialsIconList }/>
        </div>
        <div className='footer--address'>
          <p>Miami, Miramar, Ft. Lauderdale, Florida</p>
        </div>
        <div>
          <p>© Double Abath company. All Rights Reserved 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;