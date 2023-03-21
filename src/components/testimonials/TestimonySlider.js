import { useState } from 'react';

/*---- Imported hooks ----*/
import useWindowSize from '../../hooks/useWindowSize';

/*---- Imported components ----*/
import Testimony from './Testimony';
import TestimonySliderBtn from './TestimonySliderBtn';

/*---- Component ----*/
const TestimonySlider = ({ slides }) => {
	const [slideIndex, setSlideIndex] = useState(0);
	const quantity = slides?.length;
	const size = useWindowSize();
	if (!Array.isArray(slides) || quantity === 1) return;
	const nextSlide = () => {
		setSlideIndex(slideIndex === quantity - 1 ? 0 : slideIndex + 1);
	};
	const prevSlide = () => {
		setSlideIndex(slideIndex === 0 ? quantity - 1 : slideIndex - 1);
	};
	const moveEllipse = (index) => {
		setSlideIndex(index);
	};

	return (
		<>
			{size.width < 600 && (
				<div className='testimony-slider--container'>
					<div className='ellipse-container'>
						{Array.from({ length: slides.length }).map((item, index) => {
							return <div key={index} onClick={() => moveEllipse(index)} className={slideIndex === index ? 'ellipse active' : 'ellipse'}></div>;
						})}
					</div>
					<div className='testimony-slider'>
						{slides.map((item, index) => {
							return (
								<div key={item.id} className={slideIndex === index ? 'slider-container active' : 'slider-container'}>
									{slideIndex === index && <Testimony index={index} slide={item} />}
								</div>
							);
						})}
					</div>
				</div>
			)}
			{size.width >= 600 && (
				<div className='testimony-slider--container'>
					<div className='testimony-slider'>
						<TestimonySliderBtn moveSlide={prevSlide} direction={'prev'} />
						{slides.map((item, index) => {
							return (
								<div key={item.id} className={slideIndex === index ? 'slider-container active' : 'slider-container'}>
									{slideIndex === index && <Testimony index={index} slide={item} />}
								</div>
							);
						})}
						<TestimonySliderBtn moveSlide={nextSlide} direction={'next'} />
					</div>
					<div className='ellipse-container'>
						{Array.from({ length: slides.length }).map((item, index) => {
							return <div key={index} onClick={() => moveEllipse(index)} className={slideIndex === index ? 'ellipse active' : 'ellipse'}></div>;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default TestimonySlider;
