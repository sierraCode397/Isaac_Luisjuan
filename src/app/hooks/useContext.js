"use client"

import React, { createContext, useContext, useEffect } from 'react';
import useFetch from './../hooks/useFetch';
const { config } = require('./../config/config');


// Crear el contexto
const MiContexto = createContext();


const fetchData = async () => {
  
  try {
    const response = await fetch('https://node-autentication-app.onrender.com/api/v1/portafolios');

    if (!response.ok) {
      console.error('Error al obtener datos:', response.status, response.statusText);
      return;
    }

    const data = await response.json();
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

// Proveedor del contexto
export const MiContextoProvider = ({ children }) => {

    const portafolio = useFetch(config.portafolios || 'https://node-autentication-app.onrender.com/api/v1/portafolios');

    const diploma = useFetch(config.certificates || 'https://node-autentication-app.onrender.com/api/v1/certificates');

    const skills = useFetch(config.technologies || 'https://node-autentication-app.onrender.com/api/v1/skills');


      const sortData = (data) => {
        try {
          return data ? [...data].sort((a, b) => a.id - b.id) : [];
        } catch (error) {
          console.error('Error al clasificar datos:', error);
          return [];
        }
      };  

        const portafolioItems = sortData(portafolio);
        const certificateItems = sortData(diploma);
        const skillItem = sortData(skills);

    const contextValue = {
        portafolioItems,
        certificateItems,
        skillItem
      };

      setInterval(() => {
        window.location.reload();
        console.log("Se recargo la pagina")
      }, 600000);

    return <MiContexto.Provider value={contextValue}>{children}</MiContexto.Provider>;
};

// Hook personalizado para acceder al contexto
export const useMiContexto = () => {
  return useContext(MiContexto);
};

