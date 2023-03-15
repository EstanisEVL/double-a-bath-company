import { useState } from "react";
import WorkSliderBtn from "./WorkSliderBtn";
import WorkSlide from "./WorkSlide";

const WorkSlider = ({ slides }) => {
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
    <div className='work-section--slider-container'>
      {
        slideIndex === 0 ||
        <WorkSliderBtn moveSlide={ prevSlide } direction={ 'prev' } />
      }
      {
        slides.map((item, index) => {
          return (
            <div 
              key={ item.id }
              className={
                slideIndex === index ?
                'work--slider active' :
                'work--slider'}>
                  {slideIndex === index &&  
                    <WorkSlide
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
        <WorkSliderBtn moveSlide={ nextSlide } direction={ 'next' } />
      }
    </div>
  );
};

export default WorkSlider;