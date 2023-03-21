import { lazy, Suspense } from 'react';

/*---- Imported hook ----*/
import useNearScreen from '../../hooks/useNearScreen';

/*---- Imported components ----*/
import Spinner from '../spinner/Spinner';
const Gallery = lazy(() => import('./Gallery'));

/*---- Component ----*/
const LazyGallery = () => {
	const { isNearScreen, fromRef } = useNearScreen({
		rootMargin: '-50px',
		threshold: 0.25,
	});

	return (
		<div className={isNearScreen ? 'lazy-container visible-alt' : 'lazy-container entrance'} ref={fromRef}>
			<Suspense fallback={<Spinner />}>{isNearScreen ? <Gallery /> : <Spinner />}</Suspense>
		</div>
	);
};

export default LazyGallery;
