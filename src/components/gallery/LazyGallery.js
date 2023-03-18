import { lazy, Suspense } from 'react';

/*---- Imported hook ----*/
import useNearScreen from '../../hooks/useNearScreen';

import Spinner from '../spinner/Spinner';
const Gallery = lazy(
  () => import('./Gallery')
);

const LazyGallery = () => {
  const { isNearScreen, fromRef } = useNearScreen({
    rootMargin: '-50px',
    threshold: 0.5
  })

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
              isNearScreen ? <Gallery /> : <Spinner />
            }
        </Suspense>
    </div>
  );
};

export default LazyGallery;