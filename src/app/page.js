import Master from './components/main'
import Description from './components/description'
import Portafolio from "./components/portafolio";
import Skills from "./components/skills";
import Certificates from './components/certificates'
import Footer from './components/footer'
import SkillsScroller from "./helper/SkillScroller";
import Link from 'next/link';
import { MiContextoProvider } from './hooks/useContext';


export default function Home() {
  return (

    <MiContextoProvider>
        <Master />
          <SkillsScroller className="bg-white" rows={3} />
        <Description />
          <SkillsScroller className="bg-white" rows={3} />
        <Portafolio />
        <Skills />
        <Certificates />
        <Footer />
    </MiContextoProvider>

  )
}
