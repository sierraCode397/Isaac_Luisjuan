"use client";

import Link from "next/link";
import Navbar from "./../common/nav";
const { useMiContexto } = require("./../hooks/useContext");
import Cobe from "./../common/cobe";

export default function Profile() {
  const { portafolioItems, certificateItems, skillItem } = useMiContexto();

  return (
    <>
      <Navbar transparent />
      <main className="bg-black profile-page">
        <div className="flex flex-wrap items-center justify-evenly px-6">

          <div className="justify-center lg:pt-20">
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

          <section className="relative block pt-20" style={{ height: "500px", width: "500px" }}>
            <Cobe />
          </section>

          <img className="h-64 lg:pt-20" src="https://imgur.com/zUMludi.jpg" alt="" />

        </div>
      </main>
    </>
  );
}
