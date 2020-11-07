import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import MainWallpaper from '../../components/MainWallpaper/MainWallpaper';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		height: '95vh'
	}
}));

function Home() {
	const classes = useStyles();

	return (
		<div>
			<div>
				<Grid container direction='column' justify='flex-start' alignItems='stretch'>
					<Grid item>
						<Paper className={classes.paper}>
							<MainWallpaper />
						</Paper>
					</Grid>
					<Grid item>
						<Paper className={classes.paper} style={{ backgroundColor: '#9a0000' }} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Home;
