import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function DateTimeIndicator() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date);
        }, 1000)

        return () => clearInterval(interval);
    }, [])

   
    return currentTime;
}


export function CurrentTime() {
    const {state} = useContext(ThemeContext);
    const currentTime = DateTimeIndicator();

    return (
        <p className='pt-2 fw-bold' style={{color : state.theme == 'light' ? '#282b4a' : "#eeebda" }}>
            {
                currentTime.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,

                })
            }
        </p>
    )
}
export function CurrentDate() {

    const currentTime = DateTimeIndicator();

    return (
        <p>
            {
                currentTime.toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })
            }
        </p>
    )
}
