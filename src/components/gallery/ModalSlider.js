import { useState } from "react";

/*---- Imported components ----*/
import ModalSliderBtn from "./ModalSliderBtn";
import ModalSlide from "./ModalSlide";

/*---- Component ----*/
const ModalSlider = ({ slides }) => {
    const [ slideIndex, setSlideIndex ] = useState(0);
    const quantity = slides?.length;
    if(!Array.isArray(slides) || quantity === 1)
      return;
    const nextSlide = () => {
      setSlideIndex(slideIndex === quantity - 1 ? 0 : slideIndex + 1);
    };
    const prevSlide = () => {
      setSlideIndex(slideIndex === 0 ? quantity - 1 : slideIndex - 1);
    };
  
  return(
    <div className='modal--slider-container'>
      {
        slideIndex === 0 ||
        <ModalSliderBtn moveSlide={ prevSlide } direction={ 'prev' } />
      }
      {
        slides.map((item, index) => {
          return (
            <div 
              key={ item.id }
              className={
                slideIndex === index ?
                'modal--slider active' :
                'modal--slider'}>
                  {slideIndex === index &&  
                    <ModalSlide
                    index={ index }
                    slide={ item }
                    />
                  }
            </div>
          )
        })
      }
      {
        slideIndex === quantity - 1 ||
        <ModalSliderBtn moveSlide={ nextSlide } direction={ 'next' } />
      }
    </div>
  );
};

export default ModalSlider;