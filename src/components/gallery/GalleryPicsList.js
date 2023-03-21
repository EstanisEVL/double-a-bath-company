/*---- Uuidv4 ----*/
import { v4 as uuidv4 } from 'uuid';

/*---- Imported images ----*/
import img1 from '../../assets/img/bathroom-gallery-imgs/gallery-img-1.png'
import img2 from '../../assets/img/bathroom-gallery-imgs/gallery-img-2.png'
import img3 from '../../assets/img/bathroom-gallery-imgs/gallery-img-3.png'
import img4 from '../../assets/img/bathroom-gallery-imgs/gallery-img-4.png'

/*---- Imported arrays ----*/
import { Modal1, Modal2, Modal3, Modal4 } from './ModalSliderImagesList'

/*---- Array ----*/
const GalleryPicsList = [
  {
    id: uuidv4(),
    title: 'Karen\'s Bathroom',
    description: 'Karen\'s Bathroom',
    img: img1,
    pictures: Modal1
  },
  {
    id: uuidv4(),
    title: 'Laura\'s Master',
    description: 'Laura\'s master Bathroom',
    img: img2,
    pictures: Modal2
  },
  {
    id: uuidv4(),
    title: 'Laura\'s Guest',
    description: 'Laura\'s guest Bathroom',
    img: img3,
    pictures: Modal3
  },
  {
    id: uuidv4(),
    title: 'John\'s Bathroom',
    description: 'John\'s Bathroom',
    img: img4,
    pictures: Modal4
  }
]

export default GalleryPicsList;