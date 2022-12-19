import React, { useEffect, useState } from "react";

export const Contador = () => {

    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            if(seconds === 10){
                setSeconds(0)
            }else{
            setSeconds((seconds) => seconds + 1);
        }}, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="container">
            <div className="icon box"><i className="far fa-clock"></i></div>
            <div className="counter box ">{Math.floor(seconds/10000)%10}</div>
            <div className="counter box ">{Math.floor(seconds/1000)%10}</div>
            <div className="counter box ">{Math.floor(seconds/100)%10}</div>
            <div className="counter box ">{Math.floor(seconds/10)%10}</div>
            <div className="counter box ">{seconds%10}</div>
        </div>
    );
};