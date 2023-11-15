'use client'

import React from 'react'
import useFetch from './../hooks/useFetch';


const Portafolio = () => {
    const apiUrl = 'https://node-autentication-app.onrender.com/api/v1/portafolios'

    const items = useFetch(apiUrl);
    const sortedItems = [...items].sort((a, b) => a.id - b.id);

  return (
    <section className="bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Portfolio
            </h1>

            <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
            </p>


            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {sortedItems?.map((proyect) => (

                    <div key={proyect.name} className="overflow-hidden bg-cover rounded-lg h-96 group relative"
                    style={{ backgroundImage: `url(${proyect.image})`, backgroundPosition: 'center' }}>

                        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                            <p className="mt-2 text-sm tracking-wider font-semibold text-blue-400 uppercase hover:text-blue-800 cursor-pointer">{proyect.name}</p>
                            <h2 className="mt-4 text-lg font-normal font-sans text-white ">{proyect.description}</h2>

                            {/* Aplicamos cursor-pointer solo a las etiquetas <a> */}
                            <a href={proyect.code} className="mt-2 text-lg tracking-wider font-semibold text-blue-400 uppercase hover:text-blue-600 cursor-pointer">Code</a>
                            <a href={proyect.link} className="mt-2 text-lg tracking-wider font-semibold text-blue-400 uppercase hover:text-blue-600 cursor-pointer">Website</a>
                        </div>
                    </div>
                  ))}

            </div>
        </div>
    </section>
  )
}

export default Portafolio