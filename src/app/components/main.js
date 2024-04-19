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
                +3 years of experience developing code. 
                I am Full-Stack Web developer working in personal projects as I learn new habilities. 
                I live in Ciudad Guzman, Jalisco. Throughout time I have been improving day at day my skills 
                with the most resent technologies to keep my profile upgrade.
                I apply agil methodologies like Scrum to archive goals, crafting user stories to solve issues, 
                and implementing CI/CD practices for efficient development and dependable deployment.
              </p>
            </blockquote>
          <div 
            className="flex sm:block justify-center pt-8 md:pt-0"
            style={{ width: "170px" }}
            >
            <div className="hover:animate-bounce p-5 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                {certificateItems.length}
              </span>
              <span className="text-sm text-gray-300">Certifications</span>
            </div>
            <div className="hover:animate-bounce p-5 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                {skillItem.length}
              </span>
              <span className="text-sm text-gray-300">Skills</span>
            </div>
            <div className="hover:animate-bounce p-5 text-center">
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
