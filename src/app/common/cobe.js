'use client'

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from '@react-spring/web';

export default function Cobe2() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    let phi = 0;
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
      mapSamples: 40000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [0.2, 1, 0.2],
      glowColor: [0.5, 0.7, 0.7],
      opacity:0.80,
      markers: [
        { location: [19.7008, -103.4665], size: 0.1 }, //Mexico, Guadalajara
        { location: [46.8182, 8.2275], size: 0.1 }, //Suiza, Berma
        { location: [-35.2820, 149.1286], size: 0.1 }, //Australia, Canberra

      ],
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          phi += 0.002
        } 
        state.phi = phi + r.get()
        state.width = width * 2
        state.height = width * 2
      }
    })
    setTimeout(() => canvasRef.current.style.opacity = '1')
    return () => globe.destroy()
  }, [r])

  return  ( 
    <div style={{
        width: '100%',
        maxWidth: 600,
        aspectRatio: 1,
        margin: 'auto',
        position: 'relative',
        }}
        className="bg-black">
        <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
            pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = 'grabbing';
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
            api.start({
                r: delta / 200,
            });
            }
        }}
        onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
                r: delta / 100,
            });
            }
        }}
        style={{
            width: '100%',
            height: '100%',
            cursor: 'grab',
            contain: 'layout paint size',
            opacity: 0,
            transition: 'opacity 1s ease',
        }}
        />
    </div>
  )
}
