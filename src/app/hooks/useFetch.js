import { useState } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  return data;
};

export default useFetch;











