/*---- Imported components ----*/
import GalleryPicture from './GalleryPicture';

/*---- Component ----*/
const GalleryPics = ({ pictures }) => {
	return (
		<div className='gallery'>
			{pictures.map((item, index) => {
				return <GalleryPicture index={index} picture={item} key={item.id} />;
			})}
		</div>
	);
};

export default GalleryPics;
