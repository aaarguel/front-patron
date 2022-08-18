import React from 'react';
import { Card} from 'reactstrap'

const PeopleCounter = ({id,name,count,isConnected,socket}) => {    
    // const [countPeople, setCountPeople] = useState(count);
    
    // useEffect(() => {            
    //     socket.on('sensormeasure:read', (payload) => {
    //         console.log(payload);            
    //     });        

    
    //     return () => {            
    //       socket.off('sensormeasure:read');         
    //     };
    // }, [socket,count]);


    
    return (
        <Card>        
            <p>{name}</p>
            {/* <p>{id}</p> */}
            <p>Personas: {count}</p>
            <p>Connected: { '' + isConnected }</p>            
        </Card>
    )
}

export default PeopleCounter