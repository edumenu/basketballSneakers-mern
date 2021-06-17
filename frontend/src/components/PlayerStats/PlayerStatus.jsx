/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tabs, Tab, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import PlayerProfileCard from '../PlayerProfileCard/PlayerProfileCard';
import './PlayerStats.scss';

function TabPanel({ value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box p={1}>
          <PlayerProfileCard tabIndex={index} />
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tab: {
    marginTop: '3vw',
    fontSize: '1em',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs wrapped"
          className="sideTab"
        >
          <Tab
            className={classes.tab}
            label="Michael Jordan"
            {...a11yProps(0)}
          />
          <Tab className={classes.tab} label="Kobe Bryant" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Lebron James" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Kyrie Irving" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0} />
        <TabPanel value={value} index={1} />
        <TabPanel value={value} index={2} />
        <TabPanel value={value} index={3} />
      </div>
    </Container>
  );
}
