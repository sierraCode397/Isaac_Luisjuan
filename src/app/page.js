import Master from './components/main'
import Description from './components/description'
import Portafolio from "./components/portafolio";
import Certificates from './components/certificates'
import Footer from './components/footer'
import { MiContextoProvider } from './hooks/useContext';


export default function Home() {
  return (

    <MiContextoProvider>
        <Master />
          <div className="container mx-auto pb-10 bg-black" />
        <Description />
          <div className="container mx-auto pb-10 bg-black" />
        <Portafolio />
          <div className="container mx-auto pb-10 bg-black" />
        <Certificates />
          <div className="container mx-auto pb-10 bg-black" />
        <Footer />
    </MiContextoProvider>

  )
}
