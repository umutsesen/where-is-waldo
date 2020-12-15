import React, { useState, useRef, useEffect } from 'react';
import Appbar from './Appbar'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css'
import SimpleMenu from './SimpleMenu'
import ConsecutiveSnackbars from './Feedback'
import Timer from './Timer'
import firebase from 'firebase/app';
import 'firebase/firestore'

import { useCollection } from 'react-firebase-hooks/firestore';





const MainPage = ({coordinates}) => {
    const db = firebase.firestore();
  const [value, loading, error] = useCollection(
    db.collection('TopScores').orderBy('Time', 'asc'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
    const [left, setLeft] = useState(null)
    const [top, setTop] = useState(-20);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);
    const [char, setChar] = useState(null)
    const [finish, setFinish] = useState(false)
    const StartTime = useRef(null)

    const stopTimer = () => {
        clearInterval(StartTime.current)
    }


    const style = {
        left: left + 'px',
        top: top + 'px',
        }

    const RecordMouse = (e) => {
        setLeft(e.nativeEvent.pageX - 30)
        setTop(e.nativeEvent.pageY - 30)
    }
    const checkIfWon = () => {
        if (coordinates.waldo.found && coordinates.smilingguy.found && coordinates.wally.found) return true

    }
    const checkWaldo = (x, y) => {
    
        if (x + 40 > coordinates.waldo.x && x - 10 < coordinates.waldo.x && y + 30 > coordinates.waldo.y && y - 15 < coordinates.waldo.y && char === 'Waldo') {
            setOpen(true)
            setMessageInfo('You have found Waldo!')
            coordinates.waldo.found = true
            console.log(coordinates.waldo)
            document.getElementById('img1').src = 'https://image.flaticon.com/icons/png/512/4/4629.png';
       
        } else if (x + 40 > coordinates.smilingguy.x && x - 10 < coordinates.smilingguy.x && y + 30 > coordinates.smilingguy.y && y - 15 < coordinates.smilingguy.y && char === 'SmilingGuy') {
            setOpen(true)
            setMessageInfo('You have found Smiling Guy!')
            coordinates.smilingguy.found = true
            document.getElementById('img2').src = 'https://image.flaticon.com/icons/png/512/4/4629.png';
        } else if (x + 40 > coordinates.wally.x && x - 10 < coordinates.wally.x && y + 30 > coordinates.wally.y && y - 15 < coordinates.wally.y && char === 'Wally') {
            setOpen(true)
            setMessageInfo('You have found Wally!')
            coordinates.wally.found = true
            document.getElementById('img3').src = 'https://image.flaticon.com/icons/png/512/4/4629.png';
        }
        if (checkIfWon()) {
            setFinish(true)
            stopTimer()
        }
    }
    useEffect(() => {
        checkWaldo(left, top)
    }, [char])

    return (
        <div>
        <Appbar><div  className='posabsoluteonly'>Characters:
        </div><div  className='posabsoluteonlycharacters'>     
         <img className='images' id='img1' src={coordinates.waldo.img} alt='waldo' />
        <img className='images' id='img2' src={coordinates.wally.img} alt='smiling guy' />
        <img className='images'id='img3'  src={coordinates.smilingguy.img} alt='wally' /></div><div className='textAlign'><Timer StartTime={StartTime} open={finish} value={value} /></div></Appbar>
        <LazyLoadImage onClick={(event) => RecordMouse(event)} src='https://miro.medium.com/max/5656/1*7v_75ZGg1CTmWAw1rEgMHQ.jpeg' effect='blur' />
    <div className='posabsolute' style={style}><SimpleMenu setChar={setChar} /></div>
    <ConsecutiveSnackbars setOpen={setOpen} open={open} setMessageInfo={setMessageInfo} messageInfo={messageInfo}/>
    




        </div>
        
        )
}

export default MainPage;