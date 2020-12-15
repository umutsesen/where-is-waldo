import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Button } from '@material-ui/core';
import './App.css'
import BasicTable from './HighestScores'
import { Formik, Field, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

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
  },
  inside: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    margin: '20px',
},
items: {
  marginTop: '10px'
}

}));


export default function FinishGame({open, getTime, value}) {

  const classes = useStyles();
  const [visible, setVisible] = useState(false)

  const shownhide = { display: visible ? 'block' : 'none' }
  const hidenshow = { display: visible ? 'none' : 'block',
margin: '0 auto'}

  const toggleVisibility = () => {
    setVisible(!visible)

  }
  const onSubmit = (values) => {
    console.log(values)

  }
  const initialValues = {
    firstName: '',
    time: getTime().props.children[0] + ':' + getTime().props.children[2]
  }

  const styledTextField = ({field, ...props}) => {
    return (
      <TextField {...field}   {...props} variant="outlined" />
    )
  }

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
            <h2 id="spring-modal-title">Congratulations!</h2>
            <p id="spring-modal-description">You have finished the game in {getTime()}</p>
            <Button onClick={toggleVisibility} style={hidenshow} variant="contained" color="primary">Add my score</Button>
            <div style={shownhide}>
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <Form className={classes.inside}>
        <InputLabel className={classes.items} htmlFor="firstName" required={true}>Your Name</InputLabel>
        <Field  className={classes.items} id="firstName" name="firstName" placeholder="Buse"  component={styledTextField} />
        
        <Button onClick={toggleVisibility} className={classes.items} type="submit" variant="contained" color="primary">Submit</Button>
      </Form>
              </Formik></div>
              <h4>Test Scores</h4>
  
            <BasicTable value={value} />
            <div>
            
            </div>
          </div>
      </Modal>
      
    </div>
  );
}