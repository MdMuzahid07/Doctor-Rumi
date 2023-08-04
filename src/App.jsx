import Footer from "./components/footer"
import Navbar from "./components/navbar"
import AboutMe from "./pages/home/AboutMe"
import Disease from "./pages/home/Disease"
import GetAnAppointment from "./pages/home/GetAnAppointment"
import Header from "./pages/home/Header"
import WhatPatientSays from "./pages/home/WhatPatientSays"

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Header />
        <AboutMe />
        <GetAnAppointment />
        <Disease />
        <WhatPatientSays />
      </main >
      <Footer />
    </>
  )
}

export default App
