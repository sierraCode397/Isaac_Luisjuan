"use client"

const { useMiContexto }= require ('./../hooks/useContext');

const Portafolio = () => {

    const { portafolioItems } = useMiContexto();

  return (
    <section id='portfolio' style={{background: '#151515'}}>
        <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center capitalize relative">
            <span className="bg-white bg-clip-text hover:text-4xl">Portfolio</span>
          </h1>

            <p className="mt-4 text-center text-gray-200">
                Welcome to the project gallery. Below I present a selected sample of my most recent works, each of which signifies a commitment to continuous learning and improving the quality of my software.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                
                {portafolioItems?.map((proyect) => (

                    <div
                    key={proyect.name}
                    className="overflow-hidden bg-cover rounded-lg h-96 group relative"
                    style={{
                        backgroundImage: `url(${proyect.image})`,
                        backgroundSize: '100% 100%', // Ajusta el tamaño de la imagen para cubrir el contenedor
                        backgroundPosition: 'center', // Centra la imagen en el contenedor
                        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                    }}
                    >  
                        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-900/70 group-hover:opacity-100">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>

                            <p className="mt-4 text-lg tracking-wider font-extrabold text-blue-500 uppercase relative hover:animate-bounce group">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-400 text-transparent bg-clip-text">{proyect.name}</span>
                                <span className="absolute bottom-0 left-0 w-0 bg-black h-px transition-all duration-1000 group-hover:w-full group-hover:bg-white"></span>
                            </p>

                            <h2 className="mt-2 text-lg font-normal font-sans text-white ">{proyect.description}</h2>

                            {/* Aplicamos cursor-pointer solo a las etiquetas <a> */}
                            <a href={proyect.code} className="mt-2 text-lg tracking-wider font-semibold text-blue-400 uppercase hover:text-blue-900 cursor-pointer">Code</a>
                            <a href={proyect.link} className="mt-2 text-lg tracking-wider font-semibold text-blue-400 uppercase hover:text-blue-900 cursor-pointer">Website</a>
                        </div>
                    </div>
                  ))}
            </div>
        </div>
    </section>
  )
}

export default Portafolio