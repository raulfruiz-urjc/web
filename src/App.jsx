import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import CarHaVoz2 from './components/CarHaVoz2'
import Colaboradores from './components/Colaboradores'
import Papers from './components/Papers'
import HablApp from './components/HablApp'
export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <Colaboradores />
            
            
            <HablApp />
            <Papers />
            <Contact />
            <Footer />
        </>
    )
}