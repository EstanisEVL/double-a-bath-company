/*---- Uuidv4 ----*/
import { v4 as uuidv4 } from 'uuid';

/*---- Imported images ----*/
import testimonialImg1 from '../../assets/img/testimonial1-profile-pic.png';
import testimonialImg2 from '../../assets/img/testimonial2-profile-pic.png';
import testimonialImg3 from '../../assets/img/testimonial3-profile-pic.png';
import testimonialImg4 from '../../assets/img/testimonial4-profile-pic.png';

/*---- Array ----*/
const TestimonyList = [
	{
		id: uuidv4(),
		img: testimonialImg1,
		alt: 'client profile picture',
		testimony: 'The dedication and attention to detail was impeccable, now I love using the bathroom',
		name: 'Samantha',
	},
	{
		id: uuidv4(),
		img: testimonialImg2,
		alt: 'client profile picture',
		testimony: 'These guys are great, they remodeled my two bathrooms. They have exceeded our expectations, recommended!',
		name: 'Laura',
	},
	{
		id: uuidv4(),
		img: testimonialImg3,
		alt: 'client profile picture',
		testimony: 'Our bathroom was old fashioned and dark, now it is so pretty it makes you want to use it!',
		name: 'Michael and Kelly',
	},
	{
		id: uuidv4(),
		img: testimonialImg4,
		alt: 'client profile picture',
		testimony: 'Double Abath provides an excellent service, very professional and attentive to all the details, I recommend them!',
		name: 'John',
	},
];

export default TestimonyList;
