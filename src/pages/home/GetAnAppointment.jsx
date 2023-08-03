import ReactDayPicker from "../../utils/ReactDayPicker"
import TimePicker from "../../utils/TimePicker"

const GetAnAppointment = () => {
    return (
        <section className="commonBg py-32">
            <div className="max-w-screen-xl mx-auto px-3 md:px-20">
                <div className="grid md:grid-cols-8 gap-10">
                    <div className="md:col-span-3">
                        <h2 className="mb-10"><span className="hello-there">Get an</span> <span className="text-3xl font-bold ml-2">Appointment</span></h2>
                        <ReactDayPicker />
                        <TimePicker />

                        <button className="book w-full mt-10">Book Appointment</button>
                    </div>
                    <div className="md:col-span-5">
                        <p className="getAppointment">Getting a doctor's appointment is important for receiving medical care, managing chronic conditions, detecting health issues early, and alleviating anxiety about one's health. It provides peace of mind and reassurance, particularly for ongoing health concerns, and helps individuals take important steps towards better health.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetAnAppointment