import React, { useState } from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import Container from '@material-ui/core/Container';

import './VideoHighlights.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const StyledBreadcrumb = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette,
		height: theme.spacing(5),
		color: '#00000',
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: 16,
		'&:hover, &:focus': {
			backgroundColor: theme.palette.grey[500]
		},
		'&:active': {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(theme.palette.grey[300], 0.12)
		}
	}
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const fontStyle = {
	color: `#fff`
};

const CustomizedBreadcrumbs = () => {
	const [ urlIndex, setUrlIndex ] = useState(Math.floor(Math.random() * 3 + 0));

	// useEffect(() => {
	// }, []);

	function handleClick(event, urlNum) {
		event.preventDefault();
		setUrlIndex(urlNum);
	}

	const breadCrumbs = [ { label: `Jordan` }, { label: `Kobe` }, { label: `Lebron` }, { label: `Kyrie` } ];

	return (
		<div className='breadCrumbs'>
			<Container maxWidth='xl'>
				<Breadcrumbs aria-label='breadcrumb'>
					{breadCrumbs.map(({ label }, index) => (
						<StyledBreadcrumb
							key={index}
							component='a'
							href='#'
							label={label}
							icon={<SportsBasketballIcon fontSize='small' />}
							onClick={(e) => handleClick(e, index)}
						/>
					))}
				</Breadcrumbs>
				<h1 style={fontStyle}>Highlights</h1>
				<VideoPlayer urlIndex={urlIndex} />
			</Container>
		</div>
	);
};

export default CustomizedBreadcrumbs;
