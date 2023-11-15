import Image from 'next/image'
import Master from './components/main'
import Description from './components/description'
import Certificates from './components/certificates'
import Footer from './components/footer'
import Portafolio from "./components/portafolio";

export default function Home() {
  return (
    <>
      <Master />
        <div className="container mx-auto pb-12 bg-black" />
      <Description />
        <div className="container mx-auto pb-12 bg-black" />
      <Portafolio />
        <div className="container mx-auto pb-12 bg-black" />
      <Certificates />
        <div className="container mx-auto pb-12 bg-black" />
      <Footer />
    </>
  )
}
