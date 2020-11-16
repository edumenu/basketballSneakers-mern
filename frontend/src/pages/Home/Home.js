import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import MainWallpaper from '../../components/MainWallpaper/MainWallpaper';
import SampleShoes from '../../components/SampleShoes/SampleShoes';
import VideoHighlights from '../../components/VideoHighlights/VideoHighlights';
import PlayerStatus from '../../components/PlayerStats/PlayerStatus';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	section: {
		height: '95vh'
	},
	footer: {
		height: '45vh'
	}
}));

function Home() {
	const classes = useStyles();

	return (
		<div>
			<div>
				<Grid container direction='column' justify='flex-start' alignItems='stretch'>
					<Grid item>
						<Paper className={classes.section}>
							<MainWallpaper />
						</Paper>
					</Grid>
					<Grid item>
						<Paper className={classes.section} style={{ backgroundColor: '#1f242a' }}>
							<SampleShoes />
						</Paper>
					</Grid>
					<Grid item>
						<Paper className={classes.section} style={{ backgroundColor: '#000000' }}>
							<VideoHighlights />
						</Paper>
					</Grid>
					<Grid item>
						<Paper className={classes.section} style={{ backgroundColor: '#1f242a' }}>
							<PlayerStatus />
						</Paper>
					</Grid>
					<Grid item>
						<Paper className={classes.footer} style={{ backgroundColor: '#3e242c' }}>
							<Footer />
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Home;
