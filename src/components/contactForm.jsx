import { useForm } from "react-hook-form";
import SelectHowDidYouFindUs from "./selectHowDidYouFindUs";

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("name", { required: true })} type="text" placeholder="name" className="max-w-96 w-full py-2 px-3 border-2 block mb-5" />
                <input {...register("email", { required: true })} type="email" placeholder="email" className="max-w-96 w-full py-2 px-3 border-2 block mb-5" />
                <input {...register("phone", { required: true })} type="number" placeholder="phone number" className="max-w-96 w-full py-2 px-3 border-2 block mb-5" />

                <SelectHowDidYouFindUs />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className="text-center px-3 py-2 w-full" style={{ background: "#DA5F83" }} type="submit" value="SEND" />
            </form>
        </section>
    );
}

export default ContactForm