import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { Button } from '@material-ui/core';
import './App.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '400px',
    margin: 'auto',
    textAlign: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '4px solid',
    borderColor: theme.palette.primary.light,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttons:{
    margin: theme.spacing(2),
    padding: theme.spacing(1.5)
  }
}));


export default function SpringModal({starttimer}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    starttimer()
    setOpen(false);
    
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

          <div className={classes.paper} >
            <h2 id="spring-modal-title">Where's Waldo?</h2>
            <p id="spring-modal-description">Find these three characters.</p>
            <div>

            <Button className={classes.buttons} color='primary' variant="contained" onClick={handleClose}>Start Game</Button>
            
            </div>
          </div>
      </Modal>
      
    </div>
  );
}