/*---- Imported icons ----*/
import prevArrow from '../../assets/svg/work-prev-arrow.svg';
import nextArrow from '../../assets/svg/work-next-arrow.svg';

/*---- Component ----*/
const SliderBtn = ({ moveSlide, direction }) => {
  return(
    <button
      onClick={ moveSlide }
      className={ direction === 'prev' ? 'left' : 'right'}
      >
      <img
        className='slider-btn'
        src={ direction === 'prev' ? prevArrow : nextArrow }
        alt={ direction === 'prev' ? 'previous arrow' : 'next arrow' }
      />
    </button>
  );
};

export default SliderBtn;