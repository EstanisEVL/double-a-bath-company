import { useState } from 'react';

/*---- Imported components ----*/
import Testimony from './Testimony';
import SliderBtn from './SliderBtn';

const TestimonySlider = ({ slides }) => {
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
  const moveEllipse = index => {
    setSlideIndex(index);
  };

  // Render:
  return(
    <div className='testimony-slider--container'>
      <div className='testimony-slider'>
        <SliderBtn moveSlide={ prevSlide } direction={ 'prev' }/>
          {
            slides.map((item, index) => {
              return (
                <div 
                  key={ item.id }
                  className={ slideIndex === index ? 'slider-container active' : 'slider-container'}>
                    {slideIndex === index &&  
                      <Testimony
                      index={ index }
                      slide={ item }
                      />
                    }
                </div>
              )
            })
          }
        <SliderBtn moveSlide={ nextSlide } direction={ 'next' }/>
      </div>
      <div className='ellipse-container'>
        {Array.from({length: slides.length}).map((item, index) => {
          return <div
            key={ index }
            onClick={() => moveEllipse(index)}
            className={ slideIndex === index ? 'ellipse active' : 'ellipse'}>
          </div>
        })}
      </div>
    </div>
  )
};

export default TestimonySlider;