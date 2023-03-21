/*---- Uuidv4 ----*/
import { v4 as uuidv4 } from 'uuid';

/*---- Imported images ----*/
import slide1BeforeImg from '../../assets/img/work-slider-imgs/01_before.png';
import slide1AfterImg from '../../assets/img/work-slider-imgs/01_after.png';
import slide2BeforeImg from '../../assets/img/work-slider-imgs/02_before.png';
import slide2AfterImg from '../../assets/img/work-slider-imgs/02_after.png';
import slide3BeforeImg from '../../assets/img/work-slider-imgs/03_before.png';
import slide3AfterImg from '../../assets/img/work-slider-imgs/03_after.png';
import slide4BeforeImg from '../../assets/img/work-slider-imgs/04_before.png';
import slide4AfterImg from '../../assets/img/work-slider-imgs/04_after.png';

/*---- Array ----*/
const WorkSlidesList = [
  {
    id: uuidv4(),
    beforeTitle: 'Before',
    afterTitle: 'After',
    beforeAlt: 'Before work was done',
    afterAlt: 'After work was done',
    beforeImg: slide1BeforeImg,
    afterImg: slide1AfterImg
  },
  {
    id: uuidv4(),
    beforeTitle: 'Before',
    afterTitle: 'After',
    beforeAlt: 'Before work was done',
    afterAlt: 'After work was done',
    beforeImg: slide2BeforeImg,
    afterImg: slide2AfterImg
  },
  {
    id: uuidv4(),
    beforeTitle: 'Before',
    afterTitle: 'After',
    beforeAlt: 'Before work was done',
    afterAlt: 'After work was done',
    beforeImg: slide3BeforeImg,
    afterImg: slide3AfterImg
  },
  {
    id: uuidv4(),
    beforeTitle: 'Before',
    afterTitle: 'After',
    beforeAlt: 'Before work was done',
    afterAlt: 'After work was done',
    beforeImg: slide4BeforeImg,
    afterImg: slide4AfterImg
  },
];

export default WorkSlidesList;