import { lazy, Suspense } from "react";
/*---- Imported hooks ----*/
import useNearScreen from "../../hooks/useNearScreen";

/*---- Imported components ----*/
import Spinner from "../spinner/Spinner";
const Work = lazy(
  () => import('./Work')
);

const LazyWork = () => {
  const  { isNearScreen, fromRef }  = useNearScreen({ 
    rootMargin: '0px',
    threshold: 0.5 
  });
  
  return(
    <div  id="OURWORK"
    className={ 
      isNearScreen ?
      'lazy-container visible' :
      'lazy-container right'
      }
    ref={ fromRef }>
      <Suspense
        fallback={ <Spinner /> }>
          {
            isNearScreen ? <Work /> : <Spinner />
          }
      </Suspense>
    </div>
  );
};

export default LazyWork;