import React from 'react';
import ReactPlayer from 'react-player/lazy';
import PropTypes from 'prop-types';

import './VideoPlayer.css';

function VideoPlayer({ urlIndex }) {
  const videoUrl = [
    'https://www.youtube.com/watch?v=VNx29_zXw6U&ab_channel=Klaudius',
    'https://www.youtube.com/watch?v=T06yJR-Xzd4&ab_channel=NBATop10',
    'https://www.youtube.com/watch?v=oqm3UgO526A&ab_channel=JHenryProductions',
    'https://www.youtube.com/watch?v=mUs7W0ArLO0&ab_channel=LucasRafael',
  ];

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={videoUrl[urlIndex]}
        playbackRate={1}
        playing
        muted
        loop
        controls={false}
        width="100%"
        height="75%"
      />
    </div>
  );
}

VideoPlayer.propTypes = {
  urlIndex: PropTypes.number.isRequired,
};

export default VideoPlayer;
