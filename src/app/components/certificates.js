'use client'
const { useMiContexto }= require ('../hooks/useContext');

import SkillsScroller from "../helper/SkillScroller";

  export default function Certificates() {

  const { certificateItems, skillItem } = useMiContexto();

    return (
      <div id='certificates' className="bg-gray-100" style={{ overflowX: 'hidden' }}> {/* Cambiado overflow-x-auto a overflow-x-hidden */}
        <div className="mx-auto  ">
          <div className="mx-auto  py-12 sm:py-16 lg:max-w-none lg:py-20">
          <h1 className="text-3xl font-semibold text-center capitalize relative">
            <span className="bg-gradient-to-r from-yellow-600 to-black text-transparent bg-clip-text hover:text-4xl">Certificates</span>
          </h1>
            <div className="mt-6 space-x-4">
              <div className="lg:flex lg:space-x-4">
                <div
                  style={{
                    display: 'flex',
                    overflowX: 'auto', // Cambiado a overflow-x-scroll
                    WebkitOverflowScrolling: 'touch',
                    margin: '0 -10px',
                  }}
                >

                    <SkillsScroller certificateItems={certificateItems} direction={"reverse"} />


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}