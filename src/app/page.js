import Master from './components/main'
import Description from './components/description'
import Portafolio from "./components/portafolio";
import Skills from "./components/skills";
import Certificates from './components/certificates'
import Footer from './components/footer'
import InfiniteHorizontalScroller from "./helper/InfiniteHorizontalScroll";
import TagCeparate from "./helper/TagCeparate";
import { MiContextoProvider } from './hooks/useContext';


export default function Home() {
  return (

    <MiContextoProvider>
        <Master />
        <Description />
          <InfiniteHorizontalScroller rows={3} tag={TagCeparate} background={"black"} duration={115000}/>
        <Portafolio />
        <Skills />
        <Certificates />
        <Footer />
    </MiContextoProvider>

  )
}
