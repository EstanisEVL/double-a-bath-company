/*---- Import uuid: ----*/
import { v4 as uuidv4 } from 'uuid';

/*---- Imported images ----*/
import img1 from '../../assets/img/bathroom-gallery-imgs/gallery-img-1.png'
import img2 from '../../assets/img/bathroom-gallery-imgs/gallery-img-2.png'
import img3 from '../../assets/img/bathroom-gallery-imgs/gallery-img-3.png'
import img4 from '../../assets/img/bathroom-gallery-imgs/gallery-img-4.png'

// AGREGAR ENLACES A LOS MODALES!!

const GalleryPicsList = [
  {
    id: uuidv4(),
    title: 'Karen\'s Bathroom',
    img: img1,
    url: ''
  },
  {
    id: uuidv4(),
    title: 'Laura\'s Master',
    img: img2,
    url: ''
  },
  {
    id: uuidv4(),
    title: 'Laura\'s Guest',
    img: img3,
    url: ''
  },
  {
    id: uuidv4(),
    title: 'John\'s Bathroom',
    img: img4,
    url: ''
  }
]

export default GalleryPicsList;