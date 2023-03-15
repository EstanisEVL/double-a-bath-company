import { lazy, Suspense } from 'react';
/*---- Imported hooks: ----*/
import useNearScreen from '../../hooks/useNearScreen';

/*---- Imported components: ----*/
import Spinner from '../spinner/Spinner';
const Testimonials = lazy(
  () => import('./Testimonials')
);
  
const LazyTestimonials = () => {
  const  { isNearScreen, fromRef }  = useNearScreen({ 
    rootMargin: '0px',
    threshold: 0.5 
  });

  return <div
    className={
      isNearScreen ?
      'lazy-container visible' :
      'lazy-container left'
      }
    ref={ fromRef }>
      <Suspense
        fallback={ <Spinner /> }>
          {
            isNearScreen ? <Testimonials /> : <Spinner />
          }
      </Suspense>
  </div>;
};

export default LazyTestimonials;