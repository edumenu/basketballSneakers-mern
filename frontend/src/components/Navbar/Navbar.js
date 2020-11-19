import { AppBar, Container, Hidden, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles, Toolbar, Switch, Fab, FormControlLabel, Paper } from '@material-ui/core';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import React from 'react';
import BackToTop from '../BackToTop/BackToTop';
import HideOnScroll from '../HideOnScroll/HideOnScroll';
import SideDrawer from '../SideDrawer/SideDrawer';
import logo from '../../images/logo.png';

const useStyles = makeStyles((theme) => ({
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
		borderRadius: `25%`,
		color: `white`,
		fontSize: 15
	},
	sunnyIcon: {
		color: theme.palette.secondary.main
	}
}));

const navLinks = [
	{ title: `Shoe samples`, path: `#sample-sneakers`, icon: `sports_basketball` },
	{ title: `Video Highlights`, path: `#video-highlights`, icon: `video_library` },
	{ title: `Career stats`, path: `#stats`, icon: `assignment` },
	{ title: `Shop`, path: `/shop`, icon: `storefront` },
	{ title: `login`, path: `/login`, icon: `login` },
	{ title: `signup`, path: `/signup`, icon: `person_add` }
];

const Header = (props) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper>
				<HideOnScroll>
					<AppBar position='fixed'>
						<Toolbar component='nav'>
							<Container maxWidth='xl' className={classes.navbarDisplayFlex}>
								<IconButton edge='start' aria-label='home'>
									<a href='/' style={{ color: `white` }}>
										<img src={logo} alt='logo' className='bottom-left' width='40vw' height='40vh' />
									</a>
								</IconButton>

								<Hidden smDown>
									<List component='nav' aria-labelledby='main navigation' className={classes.navListDisplayFlex}>
										<FormControlLabel
											value='bottom'
											control={<Switch checked={props.darkMode} onChange={props.switchChange} color='secondary' />}
											label={
												props.darkMode === true ? <WbSunnyIcon className={classes.sunnyIcon} /> : <Brightness2Icon />
											}
											labelPlacement='start'
											style={{ marginRight: '.5em' }}
										/>
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
