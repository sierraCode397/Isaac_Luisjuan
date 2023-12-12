'use client'

import Link from 'next/link';
import Navbar from "./../common/nav";
const { useMiContexto }= require ('./../hooks/useContext');
import Cobe from './../common/cobe'

export default function Profile() {

  const { portafolioItems, certificateItems, skillItem } = useMiContexto();

  return (
    <>
      <Navbar transparent />
      <main className="bg-black profile-page">
        <section className="relative block" style={{ height: "500px" }}>

          <Cobe />

          <div
            className="bg-black top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-black fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://i.imgur.com/amwW3yW.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link
                        href='https://mx.linkedin.com/in/isaac-luisjuan-guerrero-b016b0258'
                        className=" bg-blue-600 active:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        style={{ transition: "all .15s ease" }}
                      >
                        linkedin
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {certificateItems.length}
                        </span>
                        <span className="text-sm text-gray-500">Certifications</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {skillItem.length}
                        </span>
                        <span className="text-sm text-gray-500">Skills</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {portafolioItems.length}
                        </span>
                        <span className="text-sm text-gray-500">Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Isaac Luisjuan G.
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-8 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    ¡Welcome to my profile!
                  </div>

                  <div className=" border-t border-gray-300 text-center">
                  </div> 
                  
                  <div className="mb-2 text-gray-700 mt-8">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Full Stack Debeloper
                  </div>
                  <div className="mb-12 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                     Platzi school of technology
                  </div>
                </div>
                {/*                 
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                     ----------------------------------- contenido 
                  </div> 
                */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}