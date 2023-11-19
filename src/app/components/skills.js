"use client"

import React from 'react'
const { useMiContexto }= require ('./../hooks/useContext');

const Skills = () => {

  const { skillItem } = useMiContexto();

  return (
<section id='skills' className="pt-12 text-gray-600 bg-gray-100">
  <h1 className="text-5xl font-semibold text-center capitalize lg:text-6xl relative text-black">
    <span className="bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text hover:lg:text-7xl hover:text-6xl">Skills</span>
  </h1>
    <div className="container px-10 py-10 mx-auto">
      <div className="flex flex-wrap">

      {skillItem?.map((skill) => (

        <div key={skill.name} className="md:w-1/4 p-4 md:p-4 w-full">
          <a className="block relative h-26 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="hover:animate-bounce object-fill object-center mx-auto w-20 h-16 md:w-24 md:h-20 lg:w-38 lg:h-34 block"
              src={skill.image}
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-center text-sm lg:text-base tracking-widest title-font mb-1">{skill.experience}</h3>
            <h2 className="text-gray-900 text-center title-font text-xl md:text-2xl font-medium hover:underline">{skill.name}</h2>
          </div>
        </div>

      ))}
      </div>
    </div>
</section>

    )
}

export default Skills
