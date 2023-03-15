import { useEffect, useState, useRef } from 'react';

const useNearScreen = ( settings = {} ) => {
  const [ isNearScreen, setIsNearScreen ] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const el = fromRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            setIsNearScreen(true);
          }
        });
      }, settings);

    if(el) {
      observer.observe(el);
    }

    return () => {
      if(el) {
        observer.unobserve(el);
      }
    }
  }, [settings]);
  
  return { fromRef, isNearScreen };
};

export default useNearScreen;