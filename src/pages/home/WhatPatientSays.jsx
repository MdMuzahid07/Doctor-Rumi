import ReviewCarousel from "../../components/ReviewCarousel"

const WhatPatientSays = () => {
    return (
        <section className="commonBg py-32 md: pt-36 pb-48">
            <div className="max-w-screen-xl mx-auto px-2 md:px-20">
                <h2 className="text-center"><span className="text-4xl font-bold mr-2">What Patients</span> <span className="hello-there">say about me</span></h2>

                <div className="mt-12">
                    <ReviewCarousel />
                </div>
            </div>
        </section>
    )
}

export default WhatPatientSays