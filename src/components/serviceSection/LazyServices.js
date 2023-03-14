/*---- Imported hooks: ----*/
import { lazy, Suspense } from 'react';
import useNearScreen from '../../hooks/useNearScreen';
import Spinner from '../spinner/Spinner';

/*---- Imported components: ----*/
const Services = lazy(
  () => import('./Services')
);

const LazyServices = () => {
  const  { isNearScreen, fromRef }  = useNearScreen({ 
    threshold: 0.5 
  });

  return <div 
    className={ isNearScreen ? 'lazy-container visible' : 'lazy-container left'}
    ref={ fromRef }>
      <Suspense fallback={ <Spinner /> }>
        { 
          isNearScreen ? <Services /> : <Spinner /> 
        }
      </Suspense>
  </div>;
};

export default LazyServices;