/*---- Component ----*/
const ServiceCard = ({ img, title, description }) => {
	return (
		<div className='service-card--container'>
			<img src={img} alt='service card icon' />
			<div className='service-card--text-container'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
