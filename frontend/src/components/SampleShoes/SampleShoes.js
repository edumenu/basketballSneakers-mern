import React from 'react';
import Button from '@material-ui/core/Button';
import './SampleShoes.css';
const SampleShoes = ({ darkMode }) => {
	return (
		<div style={{ paddingTop: '3%' }}>
			<h1 className=''>Sample shoes</h1>
			<section className='shoeCard-list'>
				<article className={darkMode ? 'shoeCard shoeCardDark' : 'shoeCard shoeCardLight'}>
					<h2>LEBRON 16 KC</h2>
					<img className='shoeImage' src='https://cdn.flightclub.com/3500/TEMPLATE/807033/2.jpg' alt='' />
					<Button size='medium' variant={darkMode ? 'outlined' : 'contained'} color='secondary'>
						More details
					</Button>
				</article>

				<article className={darkMode ? 'shoeCard shoeCardDark' : 'shoeCard shoeCardLight'}>
					<h2>AIR JORDAN 4 RETRO</h2>
					<img className='shoeImage' src='https://cdn.flightclub.com/3500/TEMPLATE/139813/1.jpg' alt='' />
					<Button size='medium' variant={darkMode ? 'outlined' : 'contained'} color='secondary'>
						More details
					</Button>
				</article>

				<article className={darkMode ? 'shoeCard shoeCardDark' : 'shoeCard shoeCardLight'}>
					<h2>KYRIE 7 PREHEAT</h2>

					<img className='shoeImage' src='https://cdn.flightclub.com/3500/TEMPLATE/246927/1.jpg' alt='' />
					<Button size='medium' variant={darkMode ? 'outlined' : 'contained'} color='secondary'>
						More details
					</Button>
				</article>

				<article className={darkMode ? 'shoeCard shoeCardDark' : 'shoeCard shoeCardLight'}>
					<h2>KOBE AD NXT 360</h2>

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

					<Button size='medium' variant={darkMode ? 'outlined' : 'contained'} color='secondary'>
						More details
					</Button>
				</article>
			</section>
		</div>
	);
};

export default SampleShoes;
