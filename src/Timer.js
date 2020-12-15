import React, { useState } from 'react';
import SpringModal from './BeginModal'
import FinishGame from './FinishedGameModal'

 const Timer = ({StartTime, open, value}) => {

    const [time, setTime] = useState(0)

    const getSeconds = () => {
        return ('0' + time % 60).slice(-2)
    }

    const getMinutes = () => {
        return ('0' + Math.floor(time / 60)).slice(-2)
    }

    const getTime = () => {
        return ( <div>
            {getMinutes()}:{getSeconds()}
        </div>)
    }

    const startTimer = () => {
        const myTimer = () => {
            setTime((prevtime) => prevtime + 1)
        }
        StartTime.current = setInterval(myTimer, 1000)
    }
    

    return(
        <div>
            {getTime()}
            <SpringModal starttimer={startTimer} />
            <FinishGame open={open} time={time} getTime={getTime} value={value} />

        </div>

    )

}
export default Timer;