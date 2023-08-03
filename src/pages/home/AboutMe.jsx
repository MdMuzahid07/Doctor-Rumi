
const AboutMe = () => {
    return (
        <section className="commonBg py-32">
            <div className="max-w-screen-xl mx-auto px-3 md:px-20 relative">
                <div className="absolute right-0 -top-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="201" height="89" viewBox="0 0 201 89" fill="none">
                        <path d="M0.99995 64.7023C47.8915 58.6453 75.717 -0.445074 102.032 1.37321C128.346 3.19149 93.5842 79.0021 75.7696 73.3052C57.955 67.6083 97.158 -4.33821 130.312 4.81632C163.465 13.9709 145.241 92.3934 123.934 87.2861C102.628 82.1789 121.053 10.5685 162.614 9.44172C204.175 8.31497 238.024 39.2614 238.024 39.2614" stroke="url(#paint0_linear_13_180)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_13_180" x1="22.244" y1="220.594" x2="-140.331" y2="-18.5128" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EE9AB1" />
                                <stop offset="1" stopColor="#E7658B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="grid md:grid-cols-7 gap-10">
                    <div className="col-span-12 md:col-span-3 relative">
                        <div className="absolute -right-24 -top-24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="136" viewBox="0 0 130 136" fill="none">
                                <path d="M60.6826 99.8577L106.301 100.003" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M36.9731 76.0688L35.0747 27.0049" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M47.0538 80.3776L50.612 63.4223" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M58.0399 92.3395L72.3352 87.3147" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M60.9899 107.84L74.0833 115.135" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M53.0991 85.3912L74.9732 59.6183" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <img className="rounded-2xl w-full object-cover" src="../../../public/assets/Doctor-Rumi-2.png" alt="" />
                    </div>
                    <div className="col-span-12 md:col-span-4 relative">
                        <h2 className="my-5">
                            <span className="hello-there">About</span>
                            <span className="text-4xl text-black ml-2">Me!</span>
                        </h2>
                        <p className="md:text-lg text-slate-400 ">
                            Dr. Rumi, a dedicated and passionate neurologist, is here to improve lives through personalized care. With expertise in neurological conditions, she creates effective treatment plans tailored to each patient's needs. By staying updated with the latest research, Dr. Rumi provides education and guidance to help patients manage their conditions and achieve better health. Her holistic approach addresses symptoms and overall wellbeing. For compassionate care and expert guidance, contact Dr. Rumi today for a consultation.
                        </p>

                        <div className="absolute hidden md:block  md:bottom-10 md:right-44">
                            <svg xmlns="http://www.w3.org/2000/svg" width="119" height="111" viewBox="0 0 119 111" fill="none">
                                <path d="M27.4712 58.4659L36.9492 103.089" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M45.7252 30.2727L93.2853 18.07" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M43.6391 41.0355L60.9634 40.9379" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M34.263 54.2971L42.1895 67.2112" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.7333 60.4497L15.3636 74.787" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M40.0132 48.0021L69.8194 63.949" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-28 -left-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="228" height="89" viewBox="0 0 228 89" fill="none">
                        <path d="M-11.0001 24.2614C35.8915 30.3185 63.717 89.4088 90.0316 87.5905C116.346 85.7723 81.5842 9.96165 63.7696 15.6585C45.955 21.3554 85.158 93.302 118.312 84.1474C151.465 74.9929 133.241 -3.42961 111.934 1.67762C90.6275 6.78485 109.053 78.3953 150.614 79.522C192.175 80.6488 226.024 49.7023 226.024 49.7023" stroke="url(#paint0_linear_13_181)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_13_181" x1="10.244" y1="-131.63" x2="-152.331" y2="107.477" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EE9AB1" />
                                <stop offset="1" stopColor="#E7658B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default AboutMe