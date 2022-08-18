
import { useState,useEffect } from 'react';

// const useFetch = (service ) => {
//     const [state, setState] = useState({total:0,data:[]});
//     // const fetchAPI = useCallback(
//     //     () => {
//     //         const setService = async () => {
//     //             const response = await service;
//     //             setState(response)  
//     //         }
//     //         setService();
//     //     },[]);
           
//     useEffect(()=>{
//         const setService = async () => {
//             const response = await service;
//             console.log(response);
//             setState(response)  
//         }
//         setService();        
//     },[]);

//     return [state,setState];
// }

const useFetch = ({url, options}) => {
    const [response, setResponse] = useState({})
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const doFetch = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          console.log(json);
          setResponse(json);
        } catch (e) {
          setError(e);
        }
      };
        doFetch();
    }, [url]);
    return [response, setResponse, error] ;
};

export default useFetch