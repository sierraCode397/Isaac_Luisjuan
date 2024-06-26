'use client'

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { useSpring } from '@react-spring/web';

export default function Cobe2() {
  const [miVariable, setMiVariable] = useState(16000);
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractingY = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const pointerInteractionMovementY = useRef(0);
  const [{ r, l }, api] = useSpring(() => ({
    l: 0,
    r: 0,
    config: {
      mass: 1,
      tension: 100,
      friction: 10,
      precision: 0.001,
    },
  }));

  const ajustarVariable = () => {
    if (window.innerWidth < 600) {
      setMiVariable(12000);
    } 
    else {
      setMiVariable(16000);
    }
  };

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
    let theta = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,      
      dark: 1,
      diffuse: 0,
      mapSamples: miVariable,
      mapBrightness: 12,
      baseColor: [0.6, 0.6, 0.6],
      markerColor: [0.2, 1, 0.2],
      glowColor: [0.4, 0.4, 0.4],
      opacity: 1,
      markers: [
        { location: [19.7008, -103.4665], size: 0.07 }, //Mexico, Guadalajara
        { location: [46.8182, 8.2275], size: 0.07 }, //Suiza, Berma
        { location: [-35.2820, 149.1286], size: 0.07 }, //Australia, Canberra
        { location: [-20.1336, -67.4891], size: 0.07 }, //Bolivia, Salar de Uyuni
        { location: [64.1466, -21.9426], size: 0.07 }, //Islandia, Reikiavik


      ],
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
        phi += 0.0005
        }         
        state.phi = phi + r.get()
        state.theta = theta + l.get()
        state.width = width * 2
        state.height = width * 2
      }
    })
    setTimeout(() => canvasRef.current.style.opacity = '1')
    return () => globe.destroy()
  }, [miVariable, r, l])

  return  ( 
    <div style={{
        width: '450',
        maxWidth: 450,
        aspectRatio: 1,
        margin: 'auto',
        position: 'relative',
        }}
        className="bg-black">
        <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            pointerInteractingY.current = e.clientY - pointerInteractionMovementY.current;
            canvasRef.current.style.cursor = 'grabbing';
            console.log("PointerInteracting " + pointerInteracting.current)
            /* console.log("hola Pointer " + e.clientX + " Y " + e.clientY) */
        }}
        onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
        }}
        onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            const bravo = e.clientY - pointerInteractingY.current;
            pointerInteractionMovementY.current = bravo;
            api.start({
                r: delta / 100,
                l: bravo / 100,
                
            });
            }
        }}
        onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            const bravo = e.touches[0].clientY - pointerInteractingY.current;
            pointerInteractionMovementY.current = bravo;
            api.start({
                r: delta / 20,
                l: bravo / 20,
            });
            }
        }}
        style={{
            width: '100%',
            height: '100%',
            cursor: 'grab',
            contain: 'layout paint size',
            opacity: 1,
            transition: 'opacity 1s ease',
        }}
        />
    </div>
  )
}

