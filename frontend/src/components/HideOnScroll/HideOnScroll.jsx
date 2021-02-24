import * as React from 'react';
import { Slide, useScrollTrigger } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};
