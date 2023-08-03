import Footer from "./components/footer"
import Navbar from "./components/navbar"
import AboutMe from "./pages/home/AboutMe"
import GetAnAppointment from "./pages/home/GetAnAppointment"
import Header from "./pages/home/Header"

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Header />
        <AboutMe />
        <GetAnAppointment />
      </main >
      <Footer />
    </>
  )
}

export default App
