import { useEffect, useRef, useState } from 'react';
import whatsappIcon from '../../assets/img/floating-whatsapp.png'

const FloatingWhatsappButton = () => {
  const fromRef = useRef();
  const [ isVisible, setIsVisible ] = useState(true);

  const onScrollEnd = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY + 200) >= document.documentElement.scrollHeight;

    if(bottom) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollEnd, {
      passive: true
    });
    return() => {
      window.removeEventListener('scroll', onScrollEnd);
    };
  }, [])


  return(
    <a
      href='https://api.whatsapp.com/send?phone=17863841030'
      target='_blank'
      rel='noreferrer'
      ref={ fromRef }
      className=
        { isVisible ?
          'floating-whatsapp--img-container'
          : 'hidden'
        }
      >
        <img
          src={ whatsappIcon }
          alt='whatsapp icon'
        />
    </a>
  );
};

export default FloatingWhatsappButton;