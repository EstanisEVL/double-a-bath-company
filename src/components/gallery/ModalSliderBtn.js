import prevArrow from '../../assets/svg/prev-arrow.svg';
import nextArrow from '../../assets/svg/next-arrow.svg';

const ModalSliderBtn = ({ moveSlide, direction }) => {
  return(
    <button
      onClick={ moveSlide }
      className={ direction === 'prev' ? 'slider-btn left' : 'slider-btn right'}
    >
      <img
        src={ direction === 'prev' ? prevArrow : nextArrow }
        alt={ direction === 'prev' ? 'previous arrow' : 'next arrow' }
      />
    </button>
  );
};

export default ModalSliderBtn;