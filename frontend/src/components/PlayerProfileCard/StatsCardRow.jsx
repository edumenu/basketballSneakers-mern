/* eslint-disable no-alert, no-console, no-nested-ternary */
import React, { useState, useEffect } from 'react';
import {
  makeStyles, Divider, Typography, Grid, Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { getInitialMode } from '../../HelperFunctions/HelperFunction1';

const StatsCardRow = ({ playerObj, rowNum }) => {
  const [playerData, setPlayerData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useState(getInitialMode());

  const statValue = (playerObjVal, rowNumVal) => {
    if (Object.keys(playerObjVal).length === 0) return null;
    const rowStart = rowNumVal === 1 ? 1 : rowNumVal === 2 ? 4 : rowNumVal === 3 ? 7 : 0;
    const rowEnd = rowNumVal === 1 ? 4 : rowNumVal === 2 ? 7 : rowNumVal === 3 ? 79 : 0;
    const threeValues = Object.entries(playerObjVal[0])
      .slice(rowStart, rowEnd).map((stat) => stat[1]);
    setPlayerData(threeValues);
    return null;
  };

  useEffect(
    () => {
      statValue(playerObj, rowNum);
      localStorage.setItem('dark', JSON.stringify(darkMode));
    },
    [playerObj, rowNum],
  );

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
      backgroundColor: darkMode ? theme.palette.background.custom : '',
    },
    paperContent: {
      padding: '1em',
    },
    title: {
      color: theme.palette.primary.main,
    },
  }));

  const classes = useStyles();

  return (
    <>
      {Object.keys(playerData).length > 0
      && playerData.map((data, index) => (
        // eslint-disable-next-line react/jsx-key
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="subtitle1" className={classes.title} gutterBottom>
              {index === 0 && rowNum === 1 ? (
                'Total Games played'
              ) : index === 0 && rowNum === 2 ? (
                'Total Assists'
              ) : index === 0 && rowNum === 3 ? (
                'Total Blocks'
              ) : (
                ''
              )}
              {index === 1 && rowNum === 1 ? (
                'Total Points'
              ) : index === 1 && rowNum === 2 ? (
                'Total FieldGoals'
              ) : index === 1 && rowNum === 3 ? (
                'Total Steals'
              ) : (
                ''
              )}
              {index === 2 && rowNum === 1 ? (
                'Total Rebound'
              ) : index === 2 && rowNum === 2 ? (
                'Total FreeThrows'
              ) : index === 2 && rowNum === 3 ? (
                'Total Minutes'
              ) : (
                ''
              )}
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h6" className={classes.paperContent}>
              {data}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

StatsCardRow.propTypes = {
  playerObj: PropTypes.shape.isRequired,
  rowNum: PropTypes.number.isRequired,
};

export default StatsCardRow;
