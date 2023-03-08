/*---- Imported list ----*/
// import CardList from './CardList';

const ServiceCard = (props) => {
  return(
    <div className='service-card__container'>
      <img 
      src={ props.img } />
      <div className='service-card__text-container'>
        <h3>
          { props.title }
        </h3>
        <p>
          { props.description }
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;