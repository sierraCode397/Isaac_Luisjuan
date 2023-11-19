"use client"

import React from 'react'
const { useMiContexto }= require ('./../hooks/useContext');

const Skills = () => {

  const { skillItem } = useMiContexto();

  return (
<section id='skills' className="pt-12 text-gray-600 bg-gray-100">
  <h1 className="text-2xl font-semibold text-center capitalize lg:text-6xl relative text-black">
    <span className="bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text hover:lg:text-7xl">Skills</span>
  </h1>
    <div className="container px-10 py-10 mx-auto">
      <div className="flex flex-wrap">

      {skillItem?.map((skill) => (

        <div key={skill.name} className="lg:w-1/4 md:w-1/2 p-10 w-full">
          <a className="block relative h-26 rounded overflow-hidden">
            <img alt="ecommerce" className="hover:animate-bounce object-fill object-center mx-auto w-42 h-36 block" src={skill.image}/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-center text-lg tracking-widest title-font mb-1">{skill.experience}</h3>
            <h2 className="text-gray-900 text-center title-font text-3xl font-medium hover:underline">{skill.name}</h2>
          </div>
        </div>

      ))}
      </div>
    </div>
</section>

    )
}

export default Skills
