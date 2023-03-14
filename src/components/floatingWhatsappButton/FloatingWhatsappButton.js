import whatsappIcon from '../../assets/img/floating-whatsapp.png'

const FloatingWhatsappButton = () => {
  return(
    <a
      className='floating-whatsapp--img-container'
      href='https://api.whatsapp.com/send?phone=17863841030'
      target='_blank'
      rel='noreferrer'
      >
      <img
        src={ whatsappIcon }
        alt='whatsapp icon'
      />
    </a>
  );
};

export default FloatingWhatsappButton;