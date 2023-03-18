import React from 'react';
import { AppBar, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.png';
import { HashLink as Link } from "react-router-hash-link";

const drawerWidth = 240;
const navItems = [{Title:"HOME", Id:""},{Title:"OUR SERVICE", Id:"OURSERVICE"},{Title:"OUR WORK", Id:"OURWORK"},{Title:"TESTIMONIALS", Id:"TESTIMONIALS"}];

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Box className='navBar'>
				<Link>
					<img src={logo} alt='Logo DoubleA' />
				</Link>
			</Box>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.Title} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText>
								<Link to={`#${item.Id}`} smooth sx={{ textDecoration: 'none', color: '#000' }}>{item.Title}</Link>
							</ListItemText>
						</ListItemButton>
					</ListItem>
				))}
				<ListItem disablePadding>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<ListItemText>
							<Link to={'#FREECONSULTATION'} smooth sx={{ textDecoration: 'none', color: '#1969B3' }}>FREE CONSULTATION</Link>
						</ListItemText>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar className='navBar' component='nav'>
				<Toolbar>
					<IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
						<Link>
							<img src={logo} className='logo' alt='Logo DoubleA' />
						</Link>
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button className='navItem' as={Link} to={`#${item.Id}`} smooth key={item.Title} size='small' sx={{ color: '#fff' }}>
								{item.Title}
							</Button>
						))}
						<Button className='navItem btnNav' as={Link} to={'#FREECONSULTATION'} smooth size='small' sx={{ backgroundColor: '#fff', color: '#1969B3' }}>
							FREE CONSULTATION
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component='main' sx={{ p: 3 }} />
		</Box>
	);
}

DrawerAppBar.propTypes = {
	window: PropTypes.func,
};

export default DrawerAppBar;
