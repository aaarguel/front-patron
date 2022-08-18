import React from 'react'
import { Card} from 'reactstrap'

const TemperatureSensor = ({id,name,temp,magnitude,isConnected,socket}) => {
    // const [temperature, setTemperature] = useState(temp);
    // useEffect(() => {            
    //     socket.on('sensormeasure:read', (payload) => {
    //         const { value, sensor } = payload;
    //         console.log(sensor,id)
    //         if(sensor === id){
    //             setTemperature(value);
    //         }
            
    //     });        
    
    //     return () => {            
    //       socket.off('sensormeasure:read');         
    //     };
    // }, [socket,temperature,id]);

    return (
        <Card>        
            <p>{name}</p>
            {/* <p>{id}</p> */}
            <p>{temp} {magnitude}</p>
            <p>Connected: { '' + isConnected }</p>
        </Card>
    )
}

export default TemperatureSensor