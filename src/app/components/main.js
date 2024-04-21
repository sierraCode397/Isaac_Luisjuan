"use client";

import Link from "next/link";
import styles from "../styles/scroll.module.css";
import Navbar from "./../common/nav";
const { useMiContexto } = require("./../hooks/useContext");

export default function Profile() {
  const { portafolioItems, certificateItems, skillItem } = useMiContexto();

  return (
    <>
      <Navbar transparent />
      <main className="pt-32 bg-black profile-page">
        <div className="px-8 pb-8 sm:pb-6 lg:pb-0 mt-4 flex items-center justify-center space-x-3 text-base">
          <div
            style={{
              color: "#e5e7eb",
            }}
            className="hover:animate-bounce text-2xl font-semibold"
          >
            Isaac Luisjuan
          </div>
          <svg
            viewBox="0 0 2 2"
            width={3}
            height={3}
            aria-hidden="true"
            className="fill-white"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div
            className="hover:animate-bounce"
            style={{
              color: "#e5e7eb",
            }}
          >
            Full-Stack Developer | JavaScript | Node | SQL
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-evenly px-6">
          <div className="rounded-lg bg-gray-400">
            <img
              className="rounded-lg"
              src="https://i.imgur.com/OmKvSac.png"
              alt=""
              style={{ 
                width: "170px", 
                height: "170px",
                animation: "reveal lineal both",
                animationTimeline: "view()",
                animationRange: "entry 20% cover 30%"
              }}
            />
          </div>
          <blockquote className="pt-8 md:pt-0 md:pl-4 lg:pl-0  text-center md:text-left">
            <p className={styles.text}>
              +3 years of experience developing code. I am Full-Stack Web
              developer working in personal projects as I learn new habilities.
              I live in Ciudad Guzman, Jalisco. I apply agil methodologies like
              Scrum to archive goals, crafting user stories to solve issues, and
              implementing CI/CD practices for efficient development and
              dependable deployment.
            </p>
          </blockquote>
          <div
            className="flex sm:block justify-center pt-8 md:pt-0"
            style={{ width: "170px" }}
          >
          <Link href="/#certificates" className="">
            <div className={styles.context}>
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                {certificateItems.length}
              </span>
              <span className="text-sm text-gray-300">Certifications</span>
            </div>
          </Link>
          <Link href="/#skills" className="">
            <div className={styles.context}>
            
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                {skillItem.length}
              </span>
              <span className="text-sm text-gray-300">Skills</span>
            </div>
          </Link>
          <Link href="/#portfolio" className="">
            <div className={styles.context}>
            
              <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                {portafolioItems.length}
              </span>
              <span className="text-sm text-gray-300">Projects</span>
            </div>
          </Link>
          </div>
        </div>
      </main>
    </>
  );
}
