import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './TemperatureSensor.scss';

const TemperatureSensor = ({id,name,temp,magnitude,isConnected,socket}) => {    
    const [rotation, setRotation] = useState(0);

    useEffect(()=>{
        const rotate = -250 + temp * 15.2;
        setRotation(rotate);
    },[temp])
    return (
        <div className='container-temp'>
            <div class="center">
                <div class="circle">
                    <div class="panel">
                        <span class="maxmin">
                            <span class="min">{0}</span>
                            <span>/</span>
                            <span class="max">{45}</span>
                        </span>
                        <span class="temperature">
                            <span class="temp"> { temp } </span>
                        </span>
                        
                        <span class="location"> { name }</span>
                        <svg class="marker-svg" style={{transform:`rotate(${rotation}deg)`}} height="120" width="120">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="60" refY="3" orient="auto" markerUnits="strokeWidth">
                                    <path d="M5,0 L5,5 L0,3 z" fill="#f00" />
                                </marker>
                            </defs>
                            <line class="line" x1="0" y1="60" x2="120" y2="60" marker-end="url(#arrow)" />
                        </svg>
                    </div>
                    <div class="helper"></div>
                </div>
            </div>
        </div>
        
    )
}

export default TemperatureSensor