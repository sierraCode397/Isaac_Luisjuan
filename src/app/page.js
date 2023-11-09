import Image from 'next/image'
import Master from './components/main'
import Description from './components/description'
import Certificates from './components/certificates'
import {useClient} from 'next/client'

export default function Home() {
  const isClient = useClient();
  return (
    <>
      <Master />
      <div className="container mx-auto pb-12"/>
      <Description />
      <div className="container mx-auto pb-12"/>
      {isClient && <Certificates />}

    </>
  )
}
