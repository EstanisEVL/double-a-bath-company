/*---- Uuidv4 ----*/
import { v4 as uuidv4 } from 'uuid';

/*---- Imported icons ----*/
import facebookIcon from '../../assets/img/facebook.png';
import instagramIcon from '../../assets/img/instagram.png';
import whatsappIcon from '../../assets/img/whatsapp.png';

/*---- Array ----*/
const SocialsIconList = [
	{
		id: uuidv4(),
		png: facebookIcon,
		title: 'facebook',
		url: 'https://www.facebook.com/A.ABathcompany?mibetextid=LQQJ4d',
	},
	{
		id: uuidv4(),
		png: instagramIcon,
		title: 'instagram',
		url: 'https://www.instagram.com/doubleabathcompany/',
	},
	{
		id: uuidv4(),
		png: whatsappIcon,
		title: 'whatsapp',
		url: 'https://api.whatsapp.com/send?phone=17863841030',
	},
];

export default SocialsIconList;
