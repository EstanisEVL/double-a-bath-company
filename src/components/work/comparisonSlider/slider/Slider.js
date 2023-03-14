import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import SliderImage from './sliderImage/SliderImage';
import SliderHandle from './sliderHandle/SliderHandle';


const Slider = ({ before, after }) => {
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isDragStarted, setDragStarted ] = useState(false);
  const [ sizes, setSizes ] = useState({});
  const dragElement = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true))
  }, [])

  const onDragStart = (e) => {
    e.preventDefault();
    const dragWidth = dragElement.current.offsetWidth,
      xPosition = e.pageX,
      containerOffset = container.current.offsetLeft,
      containerWidth = container.current.offsetWidth,
      minLeft = containerOffset + 10,
      maxLeft = containerOffset + containerWidth - dragWidth - 10;
    setSizes({
      ...sizes,
      dragWidth,
      xPosition,
      containerOffset,
      containerWidth,
      minLeft,
      maxLeft
    });
    setDragStarted(true);
  }

  const onDragStop = () => {
    setDragStarted(false);
  }

  const containerOnMouseMove = (e) => {
    if (!isDragStarted || !e.pageX) {
      return
    };
    let leftValue = e.pageX - sizes.dragWidth / 2;
    if (leftValue < sizes.minLeft) {
      leftValue = sizes.minLeft;
    } else if (leftValue > sizes.maxLeft) {
      leftValue = sizes.maxLeft;
    }

    const sliderPosition = (leftValue + sizes.dragWidth / 2 - sizes.containerOffset) * 100 / sizes.containerWidth + '%';

    setSizes({
      ...sizes,
      sliderPosition
    })
  }


  return (
    <figure
      onMouseMove={ containerOnMouseMove }
      onClick={ onDragStop }
      className={`cd-image--container ${isVisible && 'is-visible'}`}
      ref={ container }>
      <SliderImage { ...after } />
      <div
        style={{ width: sizes.sliderPosition }}
        className={`cd-resize-img ${isDragStarted && 'resizable'}`}>
        <SliderImage { ...before } />
      </div>

      <SliderHandle
        isDragStarted={ isDragStarted }
        onDragStart={ onDragStart }
        onDragStop={ onDragStop }
        positionLeft={ sizes.sliderPosition }
        elementRefference={ dragElement }
      />
    </figure>
  );
}

Slider.propTypes = {
  before: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string
  }),
  modified: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string
  })
}

export default Slider;