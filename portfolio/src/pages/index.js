import React, {useState} from 'react'
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import { Portfolio } from '../components/Portfolio';
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <InfoSection {...homeObjOne}/>
      <Portfolio />
      <InfoSection {...homeObjTwo}/>
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
