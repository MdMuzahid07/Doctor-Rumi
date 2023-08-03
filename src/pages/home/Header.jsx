import AppointmentBtn from '../../components/appointmentBtn'

const Header = () => {
    return (
        <section className="commonBg py-44">
            <div className="max-w-screen-xl mx-auto px-3 md:px-20 relative">
                <div className="absolute -top-24 -left-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="201" height="89" viewBox="0 0 201 89" fill="none">
                        <path d="M-38.0001 64.7023C8.8915 58.6453 36.717 -0.445074 63.0316 1.37321C89.3461 3.19149 54.5842 79.0021 36.7696 73.3052C18.955 67.6083 58.158 -4.33821 91.3115 4.81632C124.465 13.9709 106.241 92.3934 84.9344 87.2861C63.6275 82.1789 82.0531 10.5685 123.614 9.44172C165.175 8.31497 199.024 39.2614 199.024 39.2614" stroke="url(#paint0_linear_4_55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_4_55" x1="-16.756" y1="220.594" x2="-179.331" y2="-18.5128" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EE9AB1" />
                                <stop offset="1" stopColor="#E7658B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="grid md:grid-cols-8 gap-5">
                    <div className="col-span-12 md:col-span-5">
                        <h2 className="hello-there mb-3">Hello There!</h2>
                        <h3 className="name mb-4">This is Dr. Rumi....... </h3>
                        <p className="intro">
                            Hello, it's Dr. Rumi. As a neurologist, I'm dedicated to helping my patients manage their neurological conditions and improve their quality of life. Let's work together towards better health.
                        </p>
                        <div className="mt-20 relative">
                            <AppointmentBtn />
                            <div className="absolute -top-1 left-52">
                                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="121" viewBox="0 0 129 121" fill="none">
                                    <path d="M33.8895 70.8429L53.4932 112.034" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M45.0804 39.1754L88.4941 16.2384" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M45.5565 50.1281L62.3823 46.001" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M39.5246 65.2078L50.2392 75.9224" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M26.8259 74.5732L25.9132 89.5339" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M43.6517 57.7474L76.3509 66.319" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 mt-10 md:mt-0 relative">
                        <div className="absolute -top-10 -right-10 z-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="123" height="200" viewBox="0 0 129 206" fill="none">
                                <path d="M127.51 1.86768C103.38 42.5279 132.764 100.859 115.115 120.461C97.4648 140.063 59.1878 65.9649 74.6535 55.4469C90.1192 44.9289 122.616 120.143 94.9739 140.609C67.3318 161.076 16.8053 98.3919 33.959 84.7603C51.1126 71.1287 96.1501 129.773 71.423 163.197C46.6959 196.621 1.46387 204.204 1.46387 204.204" stroke="url(#paint0_linear_1_82)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_82" x1="-8.34808" y1="-77.4801" x2="280.146" y2="-58.1445" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#EE9AB1" />
                                        <stop offset="1" stopColor="#E7658B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="absolute -left-10 -top-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="106" height="75" viewBox="0 0 106 75" fill="none">
                                <path d="M83.9739 46.6676L91.6205 1.69458" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M56.6092 66.1417L7.90135 59.9445" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M62.5175 56.9069L46.3784 50.6086" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M76.1234 48.0379L73.5182 33.1109" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M91.898 47.6774L101.247 35.9621" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M68.4569 51.7686L46.6328 25.9535" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="z-50">
                            <img className="rounded-full z-20 max-w-96 w-full object-cover object-center " src="../public/assets/Doctor-Rumi.png" alt="" />
                        </div>
                        <div className="absolute bottom-0 -left-44 z-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="89" viewBox="0 0 240 89" fill="none">
                                <path d="M1.50056 64.7026C48.3921 58.6455 76.2176 -0.44483 102.532 1.37345C128.847 3.19174 94.0848 79.0023 76.2702 73.3055C58.4556 67.6086 97.6586 -4.33796 130.812 4.81657C163.966 13.9711 145.742 92.3936 124.435 87.2864C103.128 82.1791 121.554 10.5687 163.115 9.44196C204.676 8.31522 238.525 39.2617 238.525 39.2617" stroke="url(#paint0_linear_1_479)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_479" x1="22.7446" y1="220.594" x2="-139.83" y2="-18.5126" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#EE9AB1" />
                                        <stop offset="1" stopColor="#E7658B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Header