import React from 'react';
import { Button, Container, Link } from "@mui/material";
import { Box } from "@mui/system";

const HeroSec = () => {
	return (
		<Box className="ImgHero">
			<Container maxWidth="md" className="conteinerSlogan" >
				<h1 className="slogan">Make your bathroom an stunning place. Beautiful remodeling, with the best quality.</h1>
				<Button as={Link} className='btnHero' sx={{ color: '#fff', backgroundColor: '#1969B3'}}>FREE CONSULTATION</Button>
			</Container>
		</Box>
	);
};

export default HeroSec;
