/*---- Imported icons ----*/
import frontQuotations from '../../assets/img/front-quotations.png';
import backQuotations from '../../assets/img/back-quotations.png';

const Testimony = ({ slide }) => {
  return(
    <div className='testimony-container'>
      <img className='testimony--profile-picture'
        src={ slide.img }
        alt={ slide.alt }
      />
      <div className='testimony-container--txt'>
        <img 
          src={ frontQuotations }
          alt='front quotations icon'
          className='front-quotation'
        />
        <p className='testimony--p'>{ slide.testimony }</p>
        <div className='testimony--name'>
          <p>{ slide.name }</p>
          <img 
            src={ backQuotations }
            alt='back quotations icon'
            className='back-quotation'
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;