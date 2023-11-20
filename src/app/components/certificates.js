'use client'

import style from "./../styles/styles.module.css";
const { useMiContexto }= require ('./../hooks/useContext');


  export default function Certificates() {

    const { certificateItems } = useMiContexto();

    return (
      <div id='certificates' className="bg-gray-100" style={{ overflowX: 'hidden' }}> {/* Cambiado overflow-x-auto a overflow-x-hidden */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:max-w-none lg:py-20">
          <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl relative">
            <span className="bg-gradient-to-r from-yellow-600 to-black text-transparent bg-clip-text hover:lg:text-4xl hover:text-3xl">Certificates</span>
          </h1>
            <div className="mt-6 space-x-4">
              <div className="lg:flex lg:space-x-4 lg:py-4">
                <div
                  style={{
                    display: 'flex',
                    overflowX: 'auto', // Cambiado a overflow-x-scroll
                    WebkitOverflowScrolling: 'touch',
                    margin: '0 -10px',
                  }}
                >

                    {certificateItems?.map((product) => (
                      <div key={product.name} className="group relative flex-shrink-0" style={{ margin: '0 10px' }}>
                        <div className="relative h-64 w-80 overflow-hidden rounded-lg bg-white">
                          <img
                            src={product.image}
                            className="h-full w-full object-cover object-center"
                            alt={product.name}
                            style={{ maxHeight: '256px' }}
                          />
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500">
                          <a href={product.image}>
                            <span className="absolute inset-0" />
                          </a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">{product.name}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}