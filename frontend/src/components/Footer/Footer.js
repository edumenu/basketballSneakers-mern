import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	gridStyle: {
		marginTop: '2em'
	},
	gridHeaderStyle: {
		fontSize: '2em',
		fontWeight: '600'
	},
	gridFirstItem: {
		marginTop: '1em'
	},
	linkStyle: {
		fontSize: '1.2em',
		textDecoration: 'none',
		color: theme.palette.text.primary,
		marginTop: '10px'
	}
}));

export default function Footer() {
	const classes = useStyles();

	function FormRow(props) {
		return (
			<React.Fragment>
				<Grid className={classes.gridHeaderStyle} item>
					{props.gridHeader}
				</Grid>
				<Grid className={classes.gridFirstItem} item>
					<a
						className={classes.linkStyle}
						href={props.gridHeader !== 'About Us ' ? props.firstRowLink : ''}
						target='_blank'
						rel='noreferrer'
					>
						{props.gridHeader !== 'About Us ' ? props.firstRowData : ''}
					</a>
				</Grid>
				<Grid className={classes.gridFirstItem} item>
					<a
						className={classes.linkStyle}
						href={props.gridHeader !== 'About Us ' ? props.sendRowLink : ''}
						target='_blank'
						rel='noreferrer'
					>
						{props.gridHeader !== 'About Us ' ? props.sendRowData : ''}
					</a>
				</Grid>
				<Grid className={classes.gridFirstItem} item>
					<a
						className={classes.linkStyle}
						href={props.gridHeader !== 'About Us ' ? props.thrdRowLink : ''}
						target='_blank'
						rel='noreferrer'
					>
						{props.gridHeader !== 'About Us ' ? props.thrdRowData : ''}
					</a>
				</Grid>
				<Grid className={classes.gridFirstItem} item>
					<a
						className={classes.linkStyle}
						href={props.gridHeader !== 'About Us ' ? props.fourthRowLink : ''}
						target='_blank'
						rel='noreferrer'
					>
						{props.gridHeader !== 'About Us ' ? props.fourthRowData : ''}
					</a>
				</Grid>
			</React.Fragment>
		);
	}

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid container justify='space-evenly' className={classes.gridStyle}>
					<Grid item>
						<FormRow gridHeader={'About Us'} />
					</Grid>
					<Grid item>
						<FormRow
							gridHeader={'Player stats'}
							firstRowData={'Kyrie Irving'}
							firstRowLink={'https://www.basketball-reference.com/players/i/irvinky01.html'}
							sendRowData={'Kobe Bryant'}
							sendRowLink={'https://www.basketball-reference.com/players/b/bryanko01.html'}
							thrdRowData={'Michael Jordan'}
							thrdRowLink={'https://www.basketball-reference.com/players/j/jordami01.html'}
							fourthRowData={'Lebron James'}
							fourthRowLink={'https://www.basketball-reference.com/players/j/jamesle01.html'}
						/>
					</Grid>
					<Grid item>
						<FormRow
							gridHeader={'videos'}
							firstRowData={'Kyrie Irving'}
							firstRowLink={'https://www.youtube.com/watch?v=mUs7W0ArLO0&ab_channel=LucasRafael'}
							sendRowData={'Kobe Bryant'}
							sendRowLink={'https://www.youtube.com/watch?v=T06yJR-Xzd4&ab_channel=NBATop10'}
							thrdRowData={'Michael Jordan'}
							thrdRowLink={'https://www.youtube.com/watch?v=VNx29_zXw6U&ab_channel=Klaudius'}
							fourthRowData={'Lebron James'}
							fourthRowLink={'https://www.youtube.com/watch?v=oqm3UgO526A&ab_channel=JHenryProductions'}
						/>
					</Grid>
					<Grid item>
						<FormRow gridHeader={'Shoes'} />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
