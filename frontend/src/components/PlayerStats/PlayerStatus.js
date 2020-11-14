import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import PlayerProfileCard from '../PlayerProfileCard/PlayerProfileCard';
import { isWidthDown } from '@material-ui/core';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={1}>
					<PlayerProfileCard tabIndex={index} />
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 2,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: '100vh'
	},
	tabs: {
		borderRight: `2px solid ${theme.palette.divider}`,
		width: '35vw'
	},
	tab: {
		marginTop: '2vw',
		fontSize: '1.1em'
	}
}));

export default function VerticalTabs() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container maxWidth='lg'>
			<div className={classes.root}>
				<Tabs
					orientation='vertical'
					variant='scrollable'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs wrapped'
					className={classes.tabs}
				>
					<Tab className={classes.tab} label='Michael Jordan' {...a11yProps(0)} />
					<Tab className={classes.tab} label='Kobe Bryant' {...a11yProps(1)} />
					<Tab className={classes.tab} label='Lebron James' {...a11yProps(2)} />
					<Tab className={classes.tab} label='Kyrie Irving' {...a11yProps(3)} />
				</Tabs>
				<TabPanel value={value} index={0} />
				<TabPanel value={value} index={1} />
				<TabPanel value={value} index={2} />
				<TabPanel value={value} index={3} />
			</div>
		</Container>
	);
}
