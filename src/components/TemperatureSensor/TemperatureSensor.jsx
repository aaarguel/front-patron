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
            <div className="center">
                <div className="circle">
                    <div className="panel">
                        <span className="maxmin">
                            <span className="min">{0}</span>
                            <span>/</span>
                            <span className="max">{45}</span>
                        </span>
                        <span className="temperature">
                            <span className="temp"> { temp } </span>
                        </span>
                        
                        <span className="location"> { name }</span>
                        <svg className="marker-svg" style={{transform:`rotate(${rotation}deg)`}} height="120" width="120">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="60" refY="3" orient="auto" markerUnits="strokeWidth">
                                    <path d="M5,0 L5,5 L0,3 z" fill="#f00" />
                                </marker>
                            </defs>
                            <line className="line" x1="0" y1="60" x2="120" y2="60" markerEnd="url(#arrow)" />
                        </svg>
                    </div>
                    <div className="helper"></div>
                </div>
            </div>
        </div>
        
    )
}

export default TemperatureSensor