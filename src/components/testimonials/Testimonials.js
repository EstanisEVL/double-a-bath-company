/*---- Imported array ----*/
import TestimonyList from './TestimonyList';

/*---- Imported components ----*/
import TestimonySlider from './TestimonySlider';

/*---- Component ----*/
const Testimonials = () => {
	return (
		<section className='testimonials-section--container'>
			<h2>testimonials</h2>
			<TestimonySlider slides={TestimonyList} />
		</section>
	);
};

export default Testimonials;
