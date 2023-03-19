import GalleryPicture from "./GalleryPicture";

const GalleryPics = ({ pictures }) => {
  return(
    <div
      className='gallery'
    >
      {
        pictures.map((item, index) => {
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