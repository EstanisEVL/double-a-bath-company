import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import GalleryModal from './GalleryModal';

const GalleryPicture = ({ picture }) => {
  const [ modalShow, setModalShow ] = useState(false);

  return(
    <>
      <Button
      variant='primary'
      onClick={() => setModalShow(true)}
      className='gallery-picture--container'
      >
        <img src={ picture.img } alt={ picture.title }/>
        <h3>{ picture.title }</h3>
      </Button>
      <GalleryModal
        show={ modalShow }
        onHide={ () => setModalShow(false) }
        title={ picture.description }
        gallery={ picture.pictures }
      />
    </>
  );
};

export default GalleryPicture;