/*---- Imported array ----*/
import GalleryPicsList from "./GalleryPicsList";

/*---- Imported components ----*/
import GalleryPics from "./GalleryPics";

const Gallery = () => {
  return(
    <section
      className='gallery-section--container'
    >
      <div 
        className='gallery-section--content-container'
      >
        <h2>bathroom remodel gallery</h2>
        <GalleryPics images={ GalleryPicsList } />
      </div>
    </section>
  );
};

export default Gallery;