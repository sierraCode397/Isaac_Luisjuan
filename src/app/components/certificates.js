'use client'

import SkillsScroller from "../helper/SkillScroller";

  export default function Certificates() {

    return (
      <div id='certificates' className="bg-gray-100" style={{ overflowX: 'hidden' }}> {/* Cambiado overflow-x-auto a overflow-x-hidden */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:max-w-none lg:py-20">
          <h1 className="text-3xl font-semibold text-center capitalize relative">
            <span className="bg-gradient-to-r from-yellow-600 to-black text-transparent bg-clip-text hover:text-4xl">Certificates</span>
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

                      <SkillsScroller  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}