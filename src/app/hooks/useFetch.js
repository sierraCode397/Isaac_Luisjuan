import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      if (endpoint) { // Verificar que 'endpoint' no esté vacío
        const fetchData = async () => {
          try {
            const response = await axios.get(endpoint);
            setData(response.data);
          } catch (error) {
            console.log(error); // Manejar errores de manera más robusta
          }
        };
  
        fetchData();
      }
    }, [endpoint]);
  
    return data ;
  };
  
  export default useFetch;
  