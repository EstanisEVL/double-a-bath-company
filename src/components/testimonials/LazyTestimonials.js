/*---- Imported hooks: ----*/
import { lazy, Suspense } from 'react';
import useNearScreen from '../../hooks/useNearScreen';
import Spinner from '../spinner/Spinner';

/*---- Imported components: ----*/
const Testimonials = lazy(
  () => import('./Testimonials')
);

const LazyTestimonials = () => {
  const  { isNearScreen, fromRef }  = useNearScreen({ 
    threshold: 0.5 
  });

  return <div
    className={ isNearScreen ? 'lazy-container visible' : 'lazy-container right'}
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