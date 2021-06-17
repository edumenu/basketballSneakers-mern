/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  emphasize,
  withStyles,
  Breadcrumbs,
  Chip,
  Container,
} from '@material-ui/core';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

import './VideoHighlights.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: theme.spacing(5),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.dark,
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

const fontStyle = {
  color: '#fff',
};

const CustomizedBreadcrumbs = () => {
  const [urlIndex, setUrlIndex] = useState(Math.floor(Math.random() * 3 + 0));

  function handleClick(event, urlNum) {
    event.preventDefault();
    setUrlIndex(urlNum);
  }

  const breadCrumbs = [
    { label: 'Jordan' },
    { label: 'Kobe' },
    { label: 'Lebron' },
    { label: 'Kyrie' },
  ];

  return (
    <div className="breadCrumbs">
      <Container maxWidth="xl">
        <Breadcrumbs aria-label="breadcrumb">
          {breadCrumbs.map(({ label }, index) => (
            <StyledBreadcrumb
              key={index}
              component="a"
              href="#"
              label={label}
              icon={<SportsBasketballIcon fontSize="small" />}
              onClick={e => handleClick(e, index)}
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
