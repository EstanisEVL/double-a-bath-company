import prevArrow from '../assets/svg/prev-arrow.svg';
import nextArrow from '../assets/svg/next-arrow.svg';

const SliderBtn = ({ moveSlide, direction }) => {
  return(
    <button
      onClick={ moveSlide }
    >
      <img
        src={ direction === 'prev' ? prevArrow : nextArrow }
        alt='previous arrow'
      />
    </button>
  );
};

export default SliderBtn;