import React from 'react';
import { ThemeProvider  } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/analytics'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from './MainPage'
import firebaseConfig from './config'


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



const App = () => {

  const coordinates = {
    waldo: {
    found: false,
    img: 'https://i.imgur.com/gVCQw30.jpeg',
    x: 477,
    y: 1607
},
wally: {
    found: false,
    img: 'https://i.imgur.com/iz1mzV1.jpeg', 
    x: 2110,
    y: 1425
},
smilingguy: {
    found: false,
    img: 'https://i.imgur.com/1Pw7QWd.jpg',
    x: 1377,
    y: 745
}}
 
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <MainPage coordinates={coordinates}/>
    
    </ThemeProvider>
  );
}

export default App;
