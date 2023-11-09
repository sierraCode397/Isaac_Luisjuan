import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(endpoint) {
  const [items, setItems] = useState([]); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para controlar la carga inicial

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(endpoint);
        const data = response.data;
        setItems(data); // Actualiza el estado con los datos recibidos
        setLoading(false); // Marca la carga como completa
      } catch (error) {
        console.error("Error: ", error);
        setLoading(false); // Marca la carga como completa en caso de error
      }
    }

    fetchData(); // Llama a la función para realizar la solicitud

    // La dependencia de este efecto puede ser vacía o específica, según tus necesidades
  }, [endpoint]);
  return items
};

export default useFetch;
