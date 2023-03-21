/*---- Imported icons ----*/
import prevArrow from '../../assets/svg/prev-arrow.svg';
import nextArrow from '../../assets/svg/next-arrow.svg';

/*---- Component ----*/
const TestimonySliderBtn = ({ moveSlide, direction }) => {
  return(
    <button
      onClick={ moveSlide }
      className={ direction === 'prev' ? 'left' : 'right'}
    >
      <img
        src={ direction === 'prev' ? prevArrow : nextArrow }
        alt={ direction === 'prev' ? 'previous arrow' : 'next arrow' }
      />
    </button>
  );
};

export default TestimonySliderBtn;