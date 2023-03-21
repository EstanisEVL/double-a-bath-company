import { lazy, Suspense } from 'react';

/*---- Imported hooks ----*/
import useNearScreen from '../../hooks/useNearScreen';

/*---- Imported components ----*/
import Spinner from '../spinner/Spinner';
const Testimonials = lazy(
  () => import('./Testimonials')
);

/*---- Component ----*/
const LazyTestimonials = () => {
  const  { isNearScreen, fromRef }  = useNearScreen({ 
    rootMargin: '-50px',
    threshold: 0.25 
  });

return(
  <div id="TESTIMONIALS"
    className={
      isNearScreen ?
      'lazy-container visible-testimonials' :
      'lazy-container entrance'
      }
    ref={ fromRef }>
      <Suspense
        fallback={ <Spinner /> }>
          {
            isNearScreen ? <Testimonials /> : <Spinner />
          }
      </Suspense>
  </div>);
};

export default LazyTestimonials;