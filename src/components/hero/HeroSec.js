import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

/*---- Imported components ----*/
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';

/*---- Component ----*/
const HeroSec = () => {
	return (
		<Box className='ImgHero'>
			<Container maxWidth='md' className='conteinerSlogan'>
				<h1 className='slogan'>Make your bathroom a stunning place. Beautiful remodeling, with the best quality.</h1>
				<Button to={'#FREECONSULTATION'} smooth as={Link} className='btnHero'>
					Free consultation
				</Button>
			</Container>
		</Box>
	);
};

export default HeroSec;
