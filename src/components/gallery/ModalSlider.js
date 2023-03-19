import { useState } from "react";
import ModalSliderBtn from "./ModalSliderBtn";
import ModalSlide from "./ModalSlide";

const ModalSlider = ({ slides }) => {
    // Variables y estados:
    const [ slideIndex, setSlideIndex ] = useState(0);
    const quantity = slides?.length;
  
    // Return prematuro si no se le pasa un array al slider o si el array está vacío:
    if(!Array.isArray(slides) || quantity === 1)
      return;
  
    // Funciones:
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