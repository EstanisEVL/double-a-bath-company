const ServiceCard = ({ img, title, description }) => {
  return(
    <div className='service-card__container'>
      <img 
      src={ img } />
      <div className='service-card__text-container'>
        <h3>
          { title }
        </h3>
        <p>
          { description }
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;