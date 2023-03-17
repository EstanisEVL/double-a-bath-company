import { lazy, Suspense } from 'react';
/*---- Imported hooks: ----*/
import useNearScreen from '../../hooks/useNearScreen';

/*---- Imported components: ----*/
import Spinner from '../spinner/Spinner';
const Services = lazy(
  () => import('./Services')
);

const LazyServices = () => {
  const  { isNearScreen, fromRef }  = useNearScreen({ 
    rootMargin: '-50px',
    threshold: 0.5 
  });

  return(
    <div 
    className={
      isNearScreen ?
      'lazy-container visible' :
      'lazy-container entrance'
      }
    ref={ fromRef }>
      <Suspense 
        fallback={ <Spinner /> }>
        { 
          isNearScreen ? <Services /> : <Spinner /> 
        }
      </Suspense>
  </div>
  );
};

export default LazyServices;