import './App.css';
import TemperatureSensor from '../TemperatureSensor/TemperatureSensor';
import PeopleCounter from '../PeopleCounter/PeopleCounter';
import { Col, Row } from 'reactstrap';
import useFetch from '../../hooks/useFetch';

import io from 'socket.io-client';
import TelematicAPI from '../../helpers/TelematicAPI';
import { useState, useEffect } from 'react';

const api = new TelematicAPI();
const socket = io(api.url);

function App() {
  
  
  const [cameras,setCamera] = useFetch(api.getCameras());
  const [sensors,setSensor] = useFetch(api.getSensors());
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
        console.log("Connected!");
        setIsConnected(true);
    });

    socket.on('disconnect', () => {
        console.log("Disconnected!");
        setIsConnected(false);
    });

    socket.on('sensormeasure:read', (payload) => {
      
      const {sensor, value } = payload;
      const updated = sensors.data?.map((e)=>{
        if(sensor === e.uid){
            e.lastMeasure = value;
        }
        return e;
      })      

      
      setSensor({data:updated})
    }); 

    socket.on('camerameasure:read', (payload) => {
      
      const {camera, persons } = payload;
      const updated = cameras.data?.map((e)=>{
        if(camera === e.uid){
            e.lastMeasure = persons;
        }
        return e;
      })      
      
      setCamera({data:updated})
    }); 

    return () => {
      socket.off('connect');
      socket.off('disconnect');       
      socket.off('sensormeasure:read');    
      socket.off('camerameasure:read');  
    };
  }, [cameras,setCamera,sensors,setSensor]);

  return (
    
    <div className="App">      
      <Row className='d-flex justify-content-between'>
        <Col xl={2} >
          {
            cameras.data?.map(e=>{
              return <PeopleCounter key={e.uid} 
                        id={e.uid} 
                        name={e.name} 
                        count={e.lastMeasure} 
                        isConnected={isConnected} 
                        socket={socket}/>
            }) 
          }
          
        </Col>
        <Col xs={1} xl={2}>
          {
            sensors.data?.map(e=>{              
              return <Row key={e.uid} > 
                        <TemperatureSensor  id={e.uid} 
                          name={e.name} 
                          temp={e.lastMeasure} 
                          magnitude={e.magnitude} 
                          isConnected={isConnected} 
                          socket={socket} />  
                      </Row>
            })
          }
          
        </Col>
      </Row>      
    </div>
  );
}

export default App;
