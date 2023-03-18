import GalleryPicture from "./GalleryPicture";

const GalleryPics = ({ images }) => {
  return(
    <div
      className='gallery'
    >
      {
        images.map((item, index) => {
          return <GalleryPicture
            index={ index }  
            picture={ item }
            key={ item.id }
          />
        })
      }
    </div>
  );
};

export default GalleryPics;