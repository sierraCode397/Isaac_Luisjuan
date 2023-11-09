import Image from 'next/image'
import Master from './components/main'
import Description from './components/description'
import Certificates from './components/certificates'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Master />
      <div className="container mx-auto pb-12"/>
      <Description />
      <div className="container mx-auto pb-12"/>
      <Certificates />
      <Footer />
    </>
  )
}
