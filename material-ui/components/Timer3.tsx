import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import TimerModal from './TimerModal';

export interface DatabaseSet{
    name: string;
    time: Date;
    connectionStatus: boolean;
}

function Timer3(dataSources:any) {
    const [show, setShow] = useState(false);
    const [seconds, setSeconds] = useState(1);
    const [time, setTime]=useState('0:00:00');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    function chooseColor() {
        if( systemsUpdateCheck(dataSources)===false){
            return 'red';
        }else{
            return 'green'
        }
    }
    
    const systemsUpdateCheck=(systems:any)=>{
        let value=true;
        systems.props.forEach((element:DatabaseSet) => {
            value=value&&element.connectionStatus;
        });
        return value;
    }
    
    function tick(){
        let hr=hours;
        let min=minutes; 
        let sec= seconds;
        if (sec===59){ 
        if(min===59){ 
            min=0;
            sec=0;
            hr+=1;
        }else{
            min+=1;
            sec=0;}
        }else{sec+=1;}
        setSeconds(sec);
        setMinutes(min);
        setHours(hr);
        setTime(createTimeText());
    }

    const createTimeText=()=>{
        let timeString= String(hours)+':';
        timeString += minutes<10? '0'+String(minutes)+':':String(minutes)+':';
        timeString += seconds<10? '0'+String(seconds):String(seconds);
        console.log(timeString);
        return timeString;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            tick();
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds,time]);

    const handleClose=()=> {
        setShow(false);
    };

    return (
        <div>
            <RoundButton color={chooseColor()} onClick={()=>setShow(true)}>
                {time}
            </RoundButton>
            <TimerModal
                show={show}
                onClose={handleClose} 
                dataSources={dataSources.props}
            />
        </div>
    );
};



const RoundButton = styled.button`
  font-size: 32px;
  background-color: white;
  color: ${props => props.color === "green" ? "green" : "red"};
  width: 130px;
  height: 130px;
  padding: 10px;
  border: ${props => props.color === "green" ? "4px solid green" : "4px solid red"};
  display: inline-block;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: 'light'+this.state.color;
  } 
`;

export default Timer3;
