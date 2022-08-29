import React, { useEffect, useState } from 'react';
import './PeopleCounter.scss'

const PeopleCounter = ({id,name,count,isConnected,socket}) => {    
    const [colors, setColors] = useState([
        { name: "red", color: "#f00" },
        { name: "yellow", color: "#ff0" },
        { name: "green", color: "#0f0" }
    ]);
    const [active, setActive] = useState(0);

    useEffect(()=>{
        if(count<=3 && count>=0){
            setActive(2)
        }else if(count<=7){
            setActive(1)
        }else{
            setActive(0)
        }
    },[count])
    
    return (
        <div className='container-semaphore'>
            <div className='semaphore-title' style={{backgroundColor: `${count<=3 && count>=0? colors[2].color: count<=7 ? colors[1].color : colors[0].color }`, color:`#000` }}>
                <p>Personas: {count}</p>
            </div>
            <section className="semaphore">
                {colors.map(({name, color}, index) => {
                    const isActive = index === active;                    
                    return (
                        <button                    
                            key={`${name}-${index}`}
                            
                            className={`${isActive ? "active" : ""}`}
                            style={{
                                backgroundColor: color,
                                boxShadow: isActive ? `0 0 20px 4px ${color}` : "none"
                            }}
                        ></button>
                    );
                })}
            </section>
        </div>
        
    )
}

export default PeopleCounter