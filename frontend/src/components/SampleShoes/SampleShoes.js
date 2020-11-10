import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// import { red } from '@material-ui/core/colors';
// import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import './SampleShoes.css';

// const useStyles = makeStyles((theme) => ({
// 	avatar: {
// 		backgroundColor: red[500]
// 	}
// }));

function SampleShoes() {
	// const classes = useStyles();

	return (
		<div style={{ paddingTop: '3%' }}>
			<h1 className='sectionHeader'>Sample shoes</h1>
			<section className='shoeCard-list'>
				<article className='shoeCard'>
					<header className='shoeCard-header'>
						<h2>LEBRON 16 KC</h2>
					</header>
					<img className='shoeImage' src='https://cdn.flightclub.com/3500/TEMPLATE/807033/2.jpg' alt='' />
					<Button size='small' variant='contained'>
						More details
					</Button>
				</article>

				<article className='shoeCard'>
					<header className='shoeCard-header'>
						<h2>AIR JORDAN 4 RETRO</h2>
					</header>
					<img className='shoeImage' src='https://cdn.flightclub.com/3500/TEMPLATE/139813/1.jpg' alt='' />
					<Button size='small' variant='contained'>
						More details
					</Button>
				</article>

				<article className='shoeCard'>
					<header className='shoeCard-header'>
						<h2>KYRIE 7 PREHEAT</h2>
					</header>

					<img className='shoeImage' src='https://cdn.flightclub.com/3500/TEMPLATE/246927/1.jpg' alt='' />
					<Button size='small' variant='contained'>
						More details
					</Button>
				</article>

				<article className='shoeCard'>
					<header className='shoeCard-header'>
						<h2>KOBE AD NXT 360</h2>
					</header>

					<img className='shoeImage' src='https://cdn.flightclub.com/3500/TEMPLATE/138044/2.jpg' alt='' />

					{/* <div className='shoeCard-author'>
						<Avatar aria-label='rating' className={classes.avatar}>
							4
						</Avatar>
						<div className='stars'>
							<StarIcon style={{ color: yellow[700] }} />
							<StarIcon style={{ color: yellow[700] }} />
							<StarIcon style={{ color: yellow[700] }} />
							<StarIcon style={{ color: yellow[700] }} />
						</div>
					</div> */}

					<Button size='medium' variant='contained' className='moreDetailsButton'>
						More details
					</Button>
				</article>
			</section>
		</div>
	);
}

export default SampleShoes;
