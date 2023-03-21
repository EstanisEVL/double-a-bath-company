/*---- Component ----*/
const ModalSlide = ({ slide }) => {
  return(
    <div className='slide--container'>
      <div className='slide-img--container'>
        <img src={ slide.img1 } alt='remodeling result' />
      </div>
      <div className='slide-img--container'>
        <img src={ slide.img2 } alt='remodeling result' />
      </div>
    </div>
  );
};

export default ModalSlide;