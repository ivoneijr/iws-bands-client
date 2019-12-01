import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import Content from './components/Content';
import Header from './components/Header';

const Transition = forwardRef((props, ref) => (
  <Slide direction="left" ref={ref} {...props} />
));

const Details = ({ toggleDetails }) => {
  const state = useSelector(state => state.bands.toJS());
  const { showDetails: isOpen, selectedBand: band, albums } = state;

  return (
    <>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={toggleDetails}
        TransitionComponent={Transition}
      >
        <Header toggleDetails={toggleDetails} />
        <Content band={band} albums={albums} />
      </Dialog>
    </>
  );
};

export default Details;
