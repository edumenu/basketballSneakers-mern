import React from 'react';
import { makeStyles, Paper, Grid } from '@material-ui/core';

import MainWallpaper from '../../components/MainWallpaper/MainWallpaper';
import SampleShoes from '../../components/SampleShoes/SampleShoes';
import VideoHighlights from '../../components/VideoHighlights/VideoHighlights';
import PlayerStatus from '../../components/PlayerStats/PlayerStatus';
import Footer from '../../components/Footer/Footer';

import './Home.scss';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  section: {
    height: '95vh',
  },
  footer: {
    height: '35vh',
  },
  footerBackground: {
    height: '35vh',
    backgroundColor: '#f5f5f5',
  },
}));

const Home = darkMode => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Paper className={classes.section}>
              <MainWallpaper />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.section}>
              <SampleShoes darkMode={darkMode} />
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              className={classes.section}
              style={{ backgroundColor: '#000000' }}
            >
              <VideoHighlights darkMode={darkMode} />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className="sectionStats">
              <PlayerStatus />
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              className={darkMode ? classes.footer : classes.footerBackground}
            >
              <Footer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
