import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Avatar from '../Avatar/Avatar';
import { playerData } from './PlayerData';
import avatar from '../../images/avatar.png';
import StatsCardRow from '../PlayerProfileCard/StatsCardRow';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
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
		return setPlayerObj(playerObj);
	};

	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={1}>
					<Grid item xs={4} alignItems='center'>
						<Avatar
							imageUrl={Object.keys(playerObj).length === 0 ? avatar : playerObj[0].profileImage}
							imageSize='large'
						/>
					</Grid>
					<Grid item xs={6} alignItems='center'>
						<h1>Player Summary Stats</h1>
						<div className={classes.demo}>
							<List>
								<ListItem>
									<ListItemIcon>
										<PersonIcon />
									</ListItemIcon>
									<ListItemText primary={Object.keys(playerObj).length === 0 ? avatar : playerObj[0].name} />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<CakeIcon />
									</ListItemIcon>
									<ListItemText primary={Object.keys(playerObj).length === 0 ? avatar : playerObj[0].Birthday} />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<HomeIcon />
									</ListItemIcon>
									<ListItemText primary={Object.keys(playerObj).length === 0 ? avatar : playerObj[0].Hometown} />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<SportsBasketballIcon />
									</ListItemIcon>
									<ListItemText primary={Object.keys(playerObj).length === 0 ? avatar : playerObj[0].Position} />
								</ListItem>
							</List>
						</div>
					</Grid>
					<Grid container item xs={12} spacing={3}>
						<StatsCardRow rowNum={1} playerObj={playerObj} />
					</Grid>
					<Grid container item xs={12} spacing={3}>
						<StatsCardRow rowNum={2} playerObj={playerObj} />
					</Grid>
					<Grid container item xs={12} spacing={3}>
						<StatsCardRow rowNum={3} playerObj={playerObj} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
