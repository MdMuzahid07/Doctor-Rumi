import Slider from "react-slick";

const ReviewCarousel = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider arrows={false} {...settings}>
                <div className="px-3">
                    <div className="p-6 bg-white rounded-3xl border drop-shadow-sm hover:drop-shadow-md h-80 relative">
                        <p className="patient-review-text">
                            I came to Doctor Rumi for help with my chronic headaches, and they were amazing! Through a combination of medication and lifestyle changes, they helped me manage my symptoms and improve my quality of life. I would highly recommend their expertise to anyone struggling with neurological issues.
                        </p>
                        <div className="flex items-center absolute bottom-6 left-6 bg-white">
                            <img
                                className="w-14 h-14 object-center rounded-full object-cover mr-4"
                                src="../../public/assets/Ellipse 17 (1).png"
                                alt="patient-avatar"
                            />
                            <div>
                                <p className="text-lg font-semibold">Mr John</p>
                                <p className="text-gray-600">CEO Of BrainStation23</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3">
                    <div className="p-6 bg-white rounded-3xl border drop-shadow-sm hover:drop-shadow-md h-80 relative">
                        <p className="patient-review-text">
                            Doctor Rumi is a true professional and incredibly knowledgeable in the field of neurology. Their compassionate and personalized care made all the difference in my recovery from a traumatic brain injury. I am forever grateful for their guidance and support.
                        </p>
                        <div className="flex items-center absolute bottom-6 left-6 bg-white">
                            <img
                                className="w-14 h-14 object-center rounded-full object-cover mr-4"
                                src="../../public/assets/Ellipse 17.png"
                                alt="patient-avatar"
                            />
                            <div>
                                <p className="text-lg font-semibold">Mr Tesla</p>
                                <p className="text-gray-600">Scientist Of Electricity</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3">
                    <div className="p-6 bg-white rounded-3xl border drop-shadow-sm hover:drop-shadow-md h-80 relative">
                        <p className="patient-review-text">
                            Doctor Rumi is a true professional and incredibly knowledgeable in the field of neurology. Their compassionate and personalized care made all the difference in my recovery from a traumatic brain injury. I am forever grateful for their guidance and support.
                        </p>
                        <div className="flex items-center absolute bottom-6 left-6 bg-white">
                            <img
                                className="w-14 h-14 object-center rounded-full object-cover mr-4"
                                src="../../public/assets/Ellipse 17.png"
                                alt="patient-avatar"
                            />
                            <div>
                                <p className="text-lg font-semibold">Mr Tesla</p>
                                <p className="text-gray-600">Scientist Of Electricity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
}

export default ReviewCarousel