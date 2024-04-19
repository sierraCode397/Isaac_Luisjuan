"use client";

import Link from "next/link";
import Navbar from "./../common/nav";
const { useMiContexto } = require("./../hooks/useContext");

export default function Profile() {
  const { portafolioItems, certificateItems, skillItem } = useMiContexto();

  return (
    <>
      <Navbar transparent />
      <main className="pt-32 bg-black profile-page">
        <div className="flex flex-wrap items-center justify-evenly px-6">

          <div className="rounded-lg bg-gray-400">
            <img
              className="rounded-lg"
              src="https://i.imgur.com/OmKvSac.png"
              alt=""
              style={{ width: "170px", height: "170px" }}
            />
          </div>
          <blockquote className="pt-8 md:pt-0 text-center md:text-left">
              <p  style={{
                    width: "45vw",
                    color: '#e5e7eb',
                    
                  }}>
                I am  passionate about software development, specializing in both front-end and back-end web development. 
                Here, you will discover a digital space where creativity meets functionality. ¡Explore, 
                discover and join this journey of code and creation!.
              </p>
            </blockquote>
          <div 
            className="flex sm:block justify-center pt-8 md:pt-0"
            style={{ width: "170px" }}
            >
            <div className=" p-5 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                {certificateItems.length}
              </span>
              <span className="text-sm text-gray-300">Certifications</span>
            </div>
            <div className=" p-5 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                {skillItem.length}
              </span>
              <span className="text-sm text-gray-300">Skills</span>
            </div>
            <div className="p-5 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                {portafolioItems.length}
              </span>
              <span className="text-sm text-gray-300">Projects</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
