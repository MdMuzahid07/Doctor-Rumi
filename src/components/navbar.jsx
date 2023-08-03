import { useState } from "react";
import AppointmentBtn from "./appointmentBtn";

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => !prev);
    };

    return (
        <nav className="header-navbar sticky left-0 top-0 z-50">
            <div className="max-w-screen-xl mx-auto  px-7 md:px-16 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="logoStyle">Clinic 24.</div>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <button
                        className="text-white bg-rose-400 py-2 px-4 rounded-xl drop-shadow-md border text-xl"
                        onClick={toggleMobileNav}
                    >
                        ☰
                    </button>
                </div>

                {/* Nav Links (Desktop) */}
                <div className="hidden lg:flex gap-10">
                    <a href="/" className="text-gray-400">
                        Home
                    </a>
                    <a href="/about" className="text-gray-400">
                        About Me
                    </a>
                    <a href="/contact" className="text-gray-400">
                        Services
                    </a>
                    <a href="/contact" className="text-gray-400">
                        Contact
                    </a>
                    <a href="/contact" className="text-gray-400">
                        Blog
                    </a>
                </div>

                <div className="hidden lg:flex space-x-4">
                    <AppointmentBtn />
                </div>

                {/* Nav Links (Mobile) */}
                {isMobileNavOpen && (
                    <div className="lg:hidden absolute top-20 right-7 rounded-2xl border drop-shadow-md bg-white px-10 py-10 h-96 w-80">
                        <a href="/" className=" bg-rose-200 rounded-lg px-5 py-2 text-center block text-gray-500 mb-2">
                            Home
                        </a>
                        <a href="/about" className=" bg-rose-200 rounded-lg px-5 py-2 text-center block text-gray-500 mb-2">
                            About Me
                        </a>
                        <a href="/contact" className=" bg-rose-200 rounded-lg px-5 py-2 text-center block text-gray-500 mb-2">
                            Services
                        </a>
                        <a href="/contact" className=" bg-rose-200 rounded-lg px-5 py-2 text-center block text-gray-500 mb-2">
                            Contact
                        </a>
                        <a href="/contact" className=" bg-rose-200 rounded-lg px-5 py-2 text-center block text-gray-500 mb-2">
                            Blog
                        </a>


                        <div className="mt-5 flex justify-center">
                            <AppointmentBtn />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
