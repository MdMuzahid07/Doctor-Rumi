import { useRef } from "react"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import AboutMe from "./pages/home/AboutMe"
import Disease from "./pages/home/Disease"
import GetAnAppointment from "./pages/home/GetAnAppointment"
import GetInTouch from "./pages/home/GetInTouch"
import Header from "./pages/home/Header"
import WhatPatientSays from "./pages/home/WhatPatientSays"

function App() {
  const header = useRef(null);
  const aboutMe = useRef(null);
  const getAnAppointment = useRef(null);
  const disease = useRef(null);
  const whatPatientSays = useRef(null);
  const getInTouch = useRef(null);

  const scrollToHeader = () => {
    if (header.current) {
      header.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (aboutMe.current) {
      aboutMe.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAppointment = () => {
    if (getAnAppointment.current) {
      getAnAppointment.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReview = () => {
    if (whatPatientSays.current) {
      whatPatientSays.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (getInTouch.current) {
      getInTouch.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <>
      <Navbar
        scrollToHeader={scrollToHeader}
        scrollToAbout={scrollToAbout}
        scrollToAppointment={scrollToAppointment}
        scrollToReview={scrollToReview}
        scrollToContact={scrollToContact}
      />
      <main className="overflow-hidden">
        <Header header={header} />
        <AboutMe aboutMe={aboutMe} />
        <GetAnAppointment getAnAppointment={getAnAppointment} />
        <Disease disease={disease} />
        <WhatPatientSays whatPatientSays={whatPatientSays} />
        <GetInTouch getInTouch={getInTouch} />
      </main >
      <Footer />
    </>
  )
}

export default App
