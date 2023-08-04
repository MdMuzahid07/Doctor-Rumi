
const Disease = () => {
    return (
        <section className="commonBg py-32">
            <div className="max-w-screen-xl mx-auto px-2 md:px-20 relative">
                <h2 className="text-center"><span className="hello-there">Disease</span> <span className="text-3xl font-bold ml-2">I'm Treating</span></h2>

                <div className="absolute -top-10 -left-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="225" height="89" viewBox="0 0 225 89" fill="none">
                        <path d="M-14 64.7023C32.8916 58.6453 60.7171 -0.445074 87.0316 1.37321C113.346 3.19149 78.5843 79.0021 60.7697 73.3052C42.955 67.6083 82.158 -4.33821 115.312 4.81632C148.465 13.9709 130.241 92.3934 108.935 87.2861C87.6276 82.1789 106.053 10.5685 147.614 9.44172C189.175 8.31497 223.024 39.2614 223.024 39.2614" stroke="url(#paint0_linear_27_5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_27_5" x1="7.24404" y1="220.594" x2="-155.331" y2="-18.5128" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EE9AB1" />
                                <stop offset="1" stopColor="#E7658B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>


                <div className="grid  md:grid-cols-2 gap-10 mt-14 relative">

                    <div className="absolute -top-20 -right-28">
                        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="110" viewBox="0 0 119 110" fill="none">
                            <path d="M26.9463 51.639L36.4243 7.01602" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M45.2003 79.8321L92.7604 92.0348" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M43.1141 69.0694L60.4384 69.167" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M33.7382 55.8077L41.6647 42.8937" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.2084 49.6552L14.8387 35.3178" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M39.4883 62.1028L69.2945 46.1559" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="absolute -bottom-20 -left-28">
                        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="110" viewBox="0 0 119 110" fill="none">
                            <path d="M91.2205 57.6384L81.7424 102.261" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M72.9664 29.4452L25.4064 17.2425" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M75.0526 40.208L57.7283 40.1104" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M84.4286 53.4696L76.5021 66.3837" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M98.9583 59.6221L103.328 73.9595" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M78.6785 47.1746L48.8723 63.1215" stroke="#E7658B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="rounded-3xl bg-white p-7 px-10 sm:px-10 md:px-5 lg:px-20 border drop-shadow-sm hover:drop-shadow-md w-full flex items-center justify-between">
                        <div>
                            <img className="w-24" src="../../../public/assets/disease/img-1.png" alt="" />
                        </div>
                        <div>
                            <h2 style={{ color: "#1678F2" }} className="disease-fonts">Epilepsy</h2>
                        </div>
                    </div>


                    <div className="rounded-3xl bg-white p-7 px-10 sm:px-10 md:px-5 lg:px-20 border drop-shadow-sm hover:drop-shadow-md w-full flex items-center justify-between">
                        <div>
                            <img className="w-24" src="../../../public/assets/disease/img-2.png" alt="" />
                        </div>
                        <div>
                            <h2 style={{ color: "#000" }} className="disease-fonts">Multiple <br /> Sclerosis</h2>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-7 px-10 sm:px-10 md:px-5 lg:px-20 border drop-shadow-sm hover:drop-shadow-md w-full flex items-center !justify-between">
                        <div>
                            <img className="w-24" src="../../../public/assets/disease/img-3.png" alt="" />

                        </div>
                        <div>
                            <h2 style={{ color: "#000" }} className="disease-fonts">Parkinson's <br /> Disease</h2>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-7 px-10 sm:px-10 md:px-5 lg:px-20 border drop-shadow-sm hover:drop-shadow-md w-full flex items-center justify-between">
                        <div>
                            <img className="w-24" src="../../../public/assets/disease/img-4.png" alt="" />
                        </div>
                        <div>
                            <h2 style={{ color: "#1678F2" }} className="disease-fonts">Migraines</h2>
                        </div>
                    </div>


                    <div className="absolute -bottom-28 -right-32">
                        <svg xmlns="http://www.w3.org/2000/svg" width="214" height="89" viewBox="0 0 214 89" fill="none">
                            <path d="M0.99995 24.2617C47.8915 30.3187 75.717 89.4091 102.032 87.5908C128.346 85.7725 93.5842 9.96189 75.7696 15.6588C57.955 21.3557 97.158 93.3022 130.312 84.1477C163.465 74.9931 145.241 -3.42937 123.934 1.67787C102.628 6.7851 121.053 78.3955 162.614 79.5223C204.175 80.649 238.024 49.7026 238.024 49.7026" stroke="url(#paint0_linear_27_4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_27_4" x1="22.244" y1="-131.63" x2="-140.331" y2="107.477" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#EE9AB1" />
                                    <stop offset="1" stopColor="#E7658B" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Disease