
import { useState,useEffect } from 'react';

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