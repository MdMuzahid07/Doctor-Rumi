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
                <div className="text-rose-400 font-bold text-4xl">Clinic 24.</div>

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
                    <button className="px-7 py-3 flex items-center gap-2 rounded-lg drop-shadow-md bg-rose-400 font-bold text-white"><svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="-5 -5 60.00 60.00" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M46.966,23.345c0-3.814-3.115-6.92-6.931-6.92s-6.933,3.105-6.933,6.92c0,3.435,2.496,6.267,5.769,6.813v7.267 c0,5.664-4.597,10.261-10.261,10.261c-5.664,0-10.262-4.598-10.262-10.261L18.323,29.1c2.686-0.358,5.311-1.929,7.646-4.612 c0.343-0.394,0.447-0.902,0.388-1.387c3.052-4.035,4.945-9.53,4.945-13.754c0-6.521-2.922-7.198-7.754-8.304l-0.007-0.012 C23.244,0.433,22.644,0,21.917,0c-1.021,0-1.849,0.827-1.849,1.836c0,1.021,0.827,1.848,1.849,1.848 c0.404,0,0.783-0.168,1.084-0.407l0.043,0.016c4.691,1.077,5.957,1.369,5.957,6.054c0,3.715-1.758,8.69-4.445,12.282 c-0.445,0.026-0.885,0.222-1.214,0.588c-1.373,1.589-3.567,3.491-6.159,3.491c-2.59,0-4.782-1.884-6.155-3.469 c-0.33-0.366-0.769-0.562-1.211-0.587c-2.694-3.605-4.456-8.586-4.456-12.306c0-4.688,1.245-4.979,5.965-6.056l0.016-0.015 c0.324,0.239,0.677,0.408,1.107,0.408c1.021,0,1.848-0.828,1.848-1.848C14.296,0.827,13.47,0,12.448,0 c-0.729,0-1.328,0.433-1.646,1.029L10.798,1.03C5.961,2.146,3.034,2.811,3.034,9.347c0,4.228,1.9,9.743,4.979,13.777 c-0.059,0.485,0.046,0.994,0.389,1.387c2.333,2.665,4.933,4.23,7.616,4.589l0.003,8.324C16.022,44.359,21.676,50,28.61,50 c6.934,0,12.564-5.641,12.564-12.576v-7.267C44.446,29.611,46.966,26.779,46.966,23.345z M40.035,27.975 c-2.543,0-4.63-2.074-4.63-4.628c0-2.544,2.087-4.617,4.63-4.617s4.606,2.073,4.606,4.617 C44.642,25.9,42.578,27.975,40.035,27.975z"></path> <path d="M40.035,19.891c-1.91,0-3.466,1.545-3.466,3.455c0,1.921,1.556,3.464,3.466,3.464c1.909,0,3.466-1.543,3.466-3.464 C43.501,21.436,41.944,19.891,40.035,19.891z"></path> </g> </g> </g></svg>Get an Appointment</button>
                </div>

                {/* Nav Links (Mobile) */}
                {isMobileNavOpen && (
                    <div className="lg:hidden absolute top-20 right-7 rounded-2xl border drop-shadow-md bg-white p-7 h-96 w-80">
                        <a href="/" className=" bg-slate-500 rounded-lg text-center px-3 py-2 block text-white mb-2">
                            Home
                        </a>
                        <a href="/about" className=" bg-slate-500 rounded-lg text-center px-3 py-2 block text-white mb-2">
                            About Me
                        </a>
                        <a href="/contact" className=" bg-slate-500 rounded-lg text-center px-3 py-2 block text-white mb-2">
                            Services
                        </a>
                        <a href="/contact" className=" bg-slate-500 rounded-lg text-center px-3 py-2 block text-white mb-2">
                            Contact
                        </a>
                        <a href="/contact" className=" bg-slate-500 rounded-lg text-center px-3 py-2 block text-white mb-2">
                            Blog
                        </a>

                        <div className="mt-5">
                            <button className="px-7 w-full py-3 flex items-center gap-2 rounded-lg drop-shadow-md bg-rose-400 font-bold text-white"><svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="-5 -5 60.00 60.00" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M46.966,23.345c0-3.814-3.115-6.92-6.931-6.92s-6.933,3.105-6.933,6.92c0,3.435,2.496,6.267,5.769,6.813v7.267 c0,5.664-4.597,10.261-10.261,10.261c-5.664,0-10.262-4.598-10.262-10.261L18.323,29.1c2.686-0.358,5.311-1.929,7.646-4.612 c0.343-0.394,0.447-0.902,0.388-1.387c3.052-4.035,4.945-9.53,4.945-13.754c0-6.521-2.922-7.198-7.754-8.304l-0.007-0.012 C23.244,0.433,22.644,0,21.917,0c-1.021,0-1.849,0.827-1.849,1.836c0,1.021,0.827,1.848,1.849,1.848 c0.404,0,0.783-0.168,1.084-0.407l0.043,0.016c4.691,1.077,5.957,1.369,5.957,6.054c0,3.715-1.758,8.69-4.445,12.282 c-0.445,0.026-0.885,0.222-1.214,0.588c-1.373,1.589-3.567,3.491-6.159,3.491c-2.59,0-4.782-1.884-6.155-3.469 c-0.33-0.366-0.769-0.562-1.211-0.587c-2.694-3.605-4.456-8.586-4.456-12.306c0-4.688,1.245-4.979,5.965-6.056l0.016-0.015 c0.324,0.239,0.677,0.408,1.107,0.408c1.021,0,1.848-0.828,1.848-1.848C14.296,0.827,13.47,0,12.448,0 c-0.729,0-1.328,0.433-1.646,1.029L10.798,1.03C5.961,2.146,3.034,2.811,3.034,9.347c0,4.228,1.9,9.743,4.979,13.777 c-0.059,0.485,0.046,0.994,0.389,1.387c2.333,2.665,4.933,4.23,7.616,4.589l0.003,8.324C16.022,44.359,21.676,50,28.61,50 c6.934,0,12.564-5.641,12.564-12.576v-7.267C44.446,29.611,46.966,26.779,46.966,23.345z M40.035,27.975 c-2.543,0-4.63-2.074-4.63-4.628c0-2.544,2.087-4.617,4.63-4.617s4.606,2.073,4.606,4.617 C44.642,25.9,42.578,27.975,40.035,27.975z"></path> <path d="M40.035,19.891c-1.91,0-3.466,1.545-3.466,3.455c0,1.921,1.556,3.464,3.466,3.464c1.909,0,3.466-1.543,3.466-3.464 C43.501,21.436,41.944,19.891,40.035,19.891z"></path> </g> </g> </g></svg>Get an Appointment</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
