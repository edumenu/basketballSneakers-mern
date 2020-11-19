import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

import Avatar from '../Avatar/Avatar';
import { playerData } from './PlayerData';
import avatar from '../../images/avatar.png';
import StatsCardRow from '../PlayerProfileCard/StatsCardRow';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	playerStats: {
		marginTop: '40px'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	paperContent: {
		padding: '.5em'
	},
	title: {
		color: theme.palette.text.secondary
	}
}));

export default function PlayerProfileCard(props) {
	const [ playerObj, setPlayerObj ] = useState({});
	const [ playerInfoObj, setplayerInfoObj ] = useState({});
	const classes = useStyles();

	useEffect(
		() => {
			eachPlayer(props.tabIndex);
		},
		[ props ]
	);

	const eachPlayer = (index) => {
		if (index === null) return {};
		let playerObj = playerData.map((ts) => {
			if (index === 0) return ts.Jordan[0];
			if (index === 1) return ts.Kobe[0];
			if (index === 2) return ts.Lebron[0];
			if (index === 3) return ts.Kyrie[0];
		});

		let playerInfoObj = playerData.map((ts) => {
			if (index === 0) return ts.Jordan[1];
			if (index === 1) return ts.Kobe[1];
			if (index === 2) return ts.Lebron[1];
			if (index === 3) return ts.Kyrie[1];
		});

		setPlayerObj(playerObj);
		setplayerInfoObj(playerInfoObj);
	};

	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={1}>
					<Grid item xs={10} md={4} lg={4} alignItems='start' className={classes.playerStats}>
						<Avatar
							imageUrl={Object.keys(playerObj).length === 0 ? avatar : playerObj[0].profileImage}
							imageSize='large'
						/>
					</Grid>
					<Grid item xs={10} md={6} lg={6} className={classes.playerStats} alignItems='center'>
						<h1>Player Summary Stats</h1>
						<div className={classes.demo}>
							<List>
								<ListItem>
									<ListItemIcon>
										<PersonIcon />
									</ListItemIcon>
									<ListItemText primary={Object.keys(playerInfoObj).length === 0 ? avatar : playerInfoObj[0].name} />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<CakeIcon />
									</ListItemIcon>
									<ListItemText
										primary={Object.keys(playerInfoObj).length === 0 ? avatar : playerInfoObj[0].Birthday}
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<HomeIcon />
									</ListItemIcon>
									<ListItemText
										primary={Object.keys(playerInfoObj).length === 0 ? avatar : playerInfoObj[0].Hometown}
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<SportsBasketballIcon />
									</ListItemIcon>
									<ListItemText
										primary={Object.keys(playerInfoObj).length === 0 ? avatar : playerInfoObj[0].Position}
									/>
								</ListItem>
							</List>
						</div>
					</Grid>
					<Grid container item xs={14} md={14} lg={12} spacing={1}>
						<StatsCardRow rowNum={1} playerObj={playerObj} />
					</Grid>
					<Grid container item xs={14} md={14} lg={12} spacing={1}>
						<StatsCardRow rowNum={2} playerObj={playerObj} />
					</Grid>
					<Grid container item xs={14} md={14} lg={12} spacing={1}>
						<StatsCardRow rowNum={3} playerObj={playerObj} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
