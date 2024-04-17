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
        <section className="relative block pt-12" style={{ height: "560px" }}>

          <Cobe />

        </section>
      </main>
    </>
  );
}