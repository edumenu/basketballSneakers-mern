import React from 'react';
import { makeStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	small: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	},
	medium: {
		width: theme.spacing(10),
		height: theme.spacing(10)
	},
	large: {
		width: theme.spacing(30),
		height: theme.spacing(30)
	}
}));

export default function ImageAvatars({ imageUrl, imageSize }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar
				alt='Remy Sharp'
				variant='rounded'
				src={imageUrl}
				className={imageSize === 'large' ? classes.large : classes.small}
			/>
		</div>
	);
}
