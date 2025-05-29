'use client'

import React from "react";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const ajustarVariable = () => {
    if (window.innerWidth > 770) {
      setNavbarOpen(true);
    } 
    else {
      setNavbarOpen(false);
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

  return (
    <>
      <nav
        className="absolute z-50 w-full flex flex-wrap items-center justify-between py-3 "
      >
        <div className="container mx-auto flex flex-wrap items-center justify-evenly">
          <div className=" relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-white text-lg font-bold leading-relaxed inline-block whitespace-nowrap uppercase hover:underline hover:animate-bounce"
              href="https://github.com/sierraCode397"
            >
              Sierra-Code-397
            </a>
          </div>

          <div
            className=
              {
                "flex items-center flex-wrap justify-between lg:px-8" + 
                (navbarOpen ? " lg:px-4" : " hidden")
              }
          >
            <Link href="https://github.com/sierraCode397/Project-Terraform-CI-CD" className="block px-4 text-md text-white hover:underline">
              CI/CD Infrastructure-as-Code
            </Link>
            <Link href="https://github.com/sierraCode397/Automation_Tools_Terraform_Ansible" className="block px-4 text-md text-white hover:underline">
              Automation_Tools
            </Link>
            <Link href="https://node-autentication-app.onrender.com/api" className="block px-4 text-md text-white hover:underline">
              API
            </Link>
            <Link href="https://drive.google.com/file/d/1rG8HB0oW6C1EojeDkAVovQDTNhOOyC6x/view?usp=sharing" className="block px-4 text-md text-white hover:underline">
              Curriculum
            </Link>

          </div>
          
          <div
            className={
              "flex items-center bg-black bg-transparent shadow-none"}
          >
          <ul className="flex flex-row list-none">

            <li className="flex items-center">
                <a
                href="https://wa.me/3414112817"
                  className="text-gray-800 text-xs rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-0 ml-3"
                >
                  <img className="rounded-lg hover:animate-bounce w-10 h-10 fill-current" src="https://i.imgur.com/529W0L5.jpeg"></img>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  href="https://mx.linkedin.com/in/isaac-luisjuan-guerrero-b016b0258"
                  className="text-gray-800  text-xs rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-0 ml-3"
                >
                  <img className="rounded-lg hover:animate-bounce w-10 h-10 fill-current" src="https://i.imgur.com/gzm9wd9.jpeg"></img>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  href="https://github.com/sierraCode397"
                  className="text-gray-800  text-xs rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-0 ml-3"
                >
                    <svg className="hover:animate-bounce fill-white w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                      </path>
                    </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}