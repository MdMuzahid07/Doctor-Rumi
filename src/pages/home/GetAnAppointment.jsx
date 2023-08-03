import ReactDayPicker from "../../utils/ReactDayPicker"
import TimePicker from "../../utils/TimePicker"

const GetAnAppointment = () => {
    return (
        <section className="commonBg py-32">
            <div className="max-w-screen-xl mx-auto px-3 md:px-20">
                <div className="grid md:grid-cols-8 gap-10">
                    <div className="col-span-12 md:col-span-3">
                        <h2 className="mb-10"><span className="hello-there">Get an</span> <span className="text-3xl font-bold ml-2">Appointment</span></h2>
                        <ReactDayPicker />
                        <TimePicker />
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam aspernatur, perspiciatis illo dolorem at voluptatum alias provident dolor, suscipit in placeat eius quae explicabo. Esse quis doloribus quam veritatis repellat consequuntur natus incidunt modi qui repellendus tenetur doloremque commodi aliquam amet repudiandae, dolor obcaecati nostrum? Deleniti cumque vero consectetur!
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetAnAppointment