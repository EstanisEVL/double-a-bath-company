const GalleryPicture = ({ picture }) => {
  return(
    <a
    href={ picture.url }
    className='gallery-picture--container'
    >
      <img src={ picture.img } alt={ picture.title }/>
      <h3>{ picture.title }</h3>
    </a>
  );
};

export default GalleryPicture;