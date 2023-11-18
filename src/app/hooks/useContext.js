"use client"

import React, { createContext, useContext } from 'react';
import useFetch from './../hooks/useFetch';


// Crear el contexto
const MiContexto = createContext();

// Proveedor del contexto
export const MiContextoProvider = ({ children }) => {
    
    const certificates = 'https://node-autentication-app.onrender.com/api/v1/certificates'
    const portafolios = 'https://node-autentication-app.onrender.com/api/v1/portafolios';


    const portafolio = useFetch(portafolios);
    let portafolioItems = [];
    if (portafolio) {
      try {
        portafolioItems = [...portafolio].sort((a, b) => a.id - b.id);
      } catch (errorSorting) {
        console.error('Error al clasificar datos:', errorSorting);
      }
    }

    const diploma = useFetch(certificates);
    let certificateItems = [];
    if (diploma) {
      try {
        certificateItems = [...diploma].sort((a, b) => a.id - b.id);
      } catch (errorSorting) {
        console.error('Error al clasificar datos:', errorSorting);
      }
    }

    const contextValue = {
        portafolioItems,
        certificateItems,
      };

    return <MiContexto.Provider value={contextValue}>{children}</MiContexto.Provider>;
};

// Hook personalizado para acceder al contexto
export const useMiContexto = () => {
  return useContext(MiContexto);
};

