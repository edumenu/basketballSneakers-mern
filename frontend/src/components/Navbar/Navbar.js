import {
	AppBar,
	Container,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Toolbar,
	Fab
} from '@material-ui/core';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
// import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import BackToTop from '../BackToTop/BackToTop';
import HideOnScroll from '../HideOnScroll/HideOnScroll';
import SideDrawer from '../SideDrawer/SideDrawer';
import logo from '../../images/logo.png';

const useStyles = makeStyles({
	navbarDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	},
	navListDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `white`,
		fontSize: 15
	}
});

const navLinks = [
	{ title: `Shoe samples`, path: `#sample-sneakers`, icon: `sports_basketball` },
	{ title: `Video Highlights`, path: `#video-highlights`, icon: `video_library` },
	{ title: `Career stats`, path: `#stats`, icon: `assignment` },
	{ title: `Shop`, path: `/shop`, icon: `storefront` },
	{ title: `login`, path: `/login`, icon: `login` },
	{ title: `signup`, path: `/signup`, icon: `person_add` }
];

const Header = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper>
				<HideOnScroll>
					<AppBar position='fixed' style={{ backgroundColor: '#1f242a' }}>
						<Toolbar component='nav'>
							<Container maxWidth='xl' className={classes.navbarDisplayFlex}>
								<IconButton edge='start' aria-label='home'>
									<a href='/' style={{ color: `white` }}>
										{/* <HomeIcon fontSize='large' /> */}
										<img src={logo} alt='logo' className='bottom-left' width='40vw' height='40vh' />
									</a>
								</IconButton>

								<Hidden smDown>
									<List component='nav' aria-labelledby='main navigation' className={classes.navListDisplayFlex}>
										{navLinks.map(({ title, path }) => (
											<a href={path} key={title} className={classes.linkText}>
												<ListItem button>
													<ListItemText primary={title} />
												</ListItem>
											</a>
										))}
									</List>
								</Hidden>
								<Hidden mdUp>
									<SideDrawer navLinks={navLinks} />
								</Hidden>
							</Container>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
				<Toolbar id='back-to-top-anchor' />

				<BackToTop>
					<Fab color='secondary' size='large' aria-label='scroll back to top'>
						<KeyboardArrowUp />
					</Fab>
				</BackToTop>
			</Paper>
		</React.Fragment>
	);
};

export default Header;
