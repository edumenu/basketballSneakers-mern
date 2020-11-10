import React, { useState, useEffect } from 'react';
// import Paper from '@material-ui/core/Paper';
import { useTransition, animated, config } from 'react-spring';
import img1 from '../../images/lebron.jpg';
import img2 from '../../images/kobe.jpg';
import img3 from '../../images/jordan.jpg';
import img4 from '../../images/kyrie.jpg';
import './MainWallpaper.css';

const slides = [ { id: 0, url: img1 }, { id: 1, url: img2 }, { id: 2, url: img3 }, { id: 3, url: img4 } ];

function MainWallpaper() {
	const [ index, set ] = useState(0);
	const transitions = useTransition(slides[index], (item) => item.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses
	});
	useEffect(() => void setInterval(() => set((state) => (state + 1) % 4), 19000), []);
	return (
		<div>
			{/* <Paper style={{ height: '80vh', width: '100%', backgroundColor: '#80d4f7' }}> */}
			{transitions.map(({ item, props, key }) => (
				<animated.div key={key} className='bg' style={{ ...props, backgroundImage: `url(${item.url})` }} />
			))}
			{/* </Paper> */}
		</div>
	);
}

export default MainWallpaper;
