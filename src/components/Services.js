import { useState } from 'react';

/*---- Imported list ----*/
import CardList from "./CardList";

// Imported components:
import ServiceCard from "./ServiceCard";

const Services = () => {

  const [ cards, setCards ] = useState(CardList);

  return(
    <section className='services-section--container'>
      <h2>our services</h2>
      <div className='services-section--card-container'>
        {
          cards.map((card, index) => {
            return(
              <ServiceCard
                key={ index }
                img={ card.img }
                title={ card.title }
                description={ card.description }
              />
            )
          })
        }
      </div>
    </section>
  );
};

export default Services;