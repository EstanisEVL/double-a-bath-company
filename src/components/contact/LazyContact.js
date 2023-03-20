import { lazy, Suspense } from 'react';
/*---- Imported hooks ----*/
import useNearScreen from '../../hooks/useNearScreen';

/*---- Imported components ----*/
import Spinner from '../spinner/Spinner';
const Contact = lazy(
  () => import('./Contact')
);

const LazyContact = () => {
  const { isNearScreen, fromRef } = useNearScreen({
    rootMargin: '-50px',
    treshold: 0.5
  });

  return(
    <div id="FREECONSULTATION"
      className={
        isNearScreen ?
        'lazy-container visible-alt' :
        'lazy-container entrance'
      }
      ref={ fromRef }>
        <Suspense
          fallback={ <Spinner /> }>
          {
            isNearScreen ? <Contact /> : <Spinner />
          }
        </Suspense>
    </div>
  );
};

export default LazyContact;