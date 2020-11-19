import React, { useState, useEffect } from 'react';
import { makeStyles, Divider, Typography, Grid, Paper } from '@material-ui/core';
import { getInitialMode } from '../../HelperFunctions/HelperFunction1';

const StatsCardRow = (props) => {
	const [ playerData, setPlayerData ] = useState({});
	const [ darkMode, setDarkMode ] = useState(getInitialMode());

	useEffect(
		() => {
			statValue(props.playerObj, props.rowNum);
			localStorage.setItem('dark', JSON.stringify(darkMode));
		},
		[ props ]
	);

	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing(1),
			textAlign: 'center',
			color: theme.palette.text.primary,
			backgroundColor: darkMode ? theme.palette.background.custom : ''
		},
		paperContent: {
			padding: '1em'
		},
		title: {
			color: theme.palette.primary.main
		}
	}));

	const classes = useStyles();

	const statValue = (playerObj, rowNum) => {
		if (Object.keys(playerObj).length === 0) return null;
		let rowStart = rowNum === 1 ? 1 : rowNum === 2 ? 4 : rowNum === 3 ? 7 : 0;
		let rowEnd = rowNum === 1 ? 4 : rowNum === 2 ? 7 : rowNum === 3 ? 79 : 0;
		let threeValues = Object.entries(playerObj[0]).slice(rowStart, rowEnd).map((stat) => stat[1]);
		setPlayerData(threeValues);
	};

	return (
		<React.Fragment>
			{Object.keys(playerData).length > 0 &&
				playerData.map((data, index) => (
					<Grid item xs={4}>
						<Paper className={classes.paper} elevation={3}>
							<Typography variant='subtitle1' className={classes.title} gutterBottom>
								{index === 0 && props.rowNum === 1 ? (
									'Total Games played'
								) : index === 0 && props.rowNum === 2 ? (
									'Total Assists'
								) : index === 0 && props.rowNum === 3 ? (
									'Total Blocks'
								) : (
									''
								)}
								{index === 1 && props.rowNum === 1 ? (
									'Total Points'
								) : index === 1 && props.rowNum === 2 ? (
									'Total FieldGoals'
								) : index === 1 && props.rowNum === 3 ? (
									'Total Steals'
								) : (
									''
								)}
								{index === 2 && props.rowNum === 1 ? (
									'Total Rebound'
								) : index === 2 && props.rowNum === 2 ? (
									'Total FreeThrows'
								) : index === 2 && props.rowNum === 3 ? (
									'Total Minutes'
								) : (
									''
								)}
							</Typography>
							<Divider variant='middle' />
							<Typography variant='h6' className={classes.paperContent}>
								{data}
							</Typography>
						</Paper>
					</Grid>
				))}
		</React.Fragment>
	);
};

export default StatsCardRow;
