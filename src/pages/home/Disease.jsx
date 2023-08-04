
const Disease = () => {
    return (
        <section className="commonBg py-32">
            <div className="max-w-screen-xl mx-auto px-2 md:px-20">
                <h2 className="text-center"><span className="hello-there">Disease</span> <span className="text-3xl font-bold ml-2">I'm Treating</span></h2>

                <div className="grid  md:grid-cols-2 gap-10 mt-14">

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


                </div>
            </div>
        </section>
    )
}

export default Disease