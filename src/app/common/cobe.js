'use client'

import styles from "./../styles/cobe.module.css";
import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

export default function Cobe() {
  const canvasRef = useRef();
  const [miVariable, setMiVariable] = useState(650);

    // Función para cambiar la variable según el ancho de la pantalla
    const ajustarVariable = () => {
        if (window.innerWidth < 600) {
          setMiVariable(400);
        } 
        else {
          setMiVariable(650);
        }
      };

        // Efecto para suscribirse al evento de cambio de tamaño de la ventana
  useEffect(() => {
    // Llamamos a la función inicialmente para establecer el valor inicial
    ajustarVariable();

    // Evento de cambio de tamaño de la ventana
    const handleResize = () => {
      ajustarVariable();
    };

    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el efecto al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: miVariable * 2,
      height: miVariable * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 36000,
      mapBrightness: 8,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.2, 0.8, 0.2],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [19.7008, -103.4665], size: 0.07 },
        { location: [46.8182, 8.2275], size: 0.07 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.003;
      }
    });

    return () => {
      globe.destroy();
    };
  }, [miVariable]);

  return (
    <div className="bg-black text-white flex items-center justify-center"> 
        <div className={styles.App}>
        <canvas
            ref={canvasRef}
            style={{ width: miVariable, height: miVariable, maxWidth: "100%", aspectRatio: 1 }}
        />
        </div>
    </div>
  );
}
