import { useState } from "react";

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => !prev);
    };

    return (
        <nav className="header-navbar sticky top-0">
            <div className="max-w-7xl mx-auto  px-7 md:px-16 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="text-pink-500 font-bold text-xl">Your Logo</div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <button
                        className="text-white text-xl"
                        onClick={toggleMobileNav}
                    >
                        ☰
                    </button>
                </div>

                {/* Nav Links (Desktop) */}
                <div className="hidden md:flex gap-10">
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

                <div className="hidden md:flex space-x-4">
                    <button className="px-7 py-3 rounded-lg drop-shadow-md bg-rose-400 font-bold text-white">Get an Appointment</button>
                </div>

                {/* Nav Links (Mobile) */}
                {isMobileNavOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-500 p-4">
                        <a href="/" className="block text-white mb-2">
                            Home
                        </a>
                        <a href="/about" className="block text-white mb-2">
                            About
                        </a>
                        <a href="/contact" className="block text-white">
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
