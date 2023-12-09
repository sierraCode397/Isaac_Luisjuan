'use client'

import styles from "./../styles/cobe.module.css";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Cobe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
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
  }, []);

  return (
    <div className="bg-black text-white flex items-center justify-center"> 
        <div className={styles.App}>
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
        </div>
    </div>
  );
}
