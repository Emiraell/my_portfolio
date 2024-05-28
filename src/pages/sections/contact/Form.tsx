import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const schema = yup.object().shape({
    name: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    message: yup.string().min(3).max(100).required(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data: any) => {
    const serviceId = "service_s6ehvor";
    const my_key = import.meta.env.VITE_MY_KEY;
    const templateId = "template_y8pnh98";

    const messageParams = {
      ...data,
    };

    emailjs
      .send(serviceId, templateId, messageParams, my_key)
      .then(() => {
        reset();
        alert(`Message sent successfully`);
      })
      .catch(() => {
        alert(`unable to send message, please try again`);
      });
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <p className="text-lg mt-10 font-bold lg:hidden">Get in touch</p>
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Name"
          className=" w-full rounded-md outline-none bg-gray-200 p-2"
          {...register("name")}
        />
        <p className="text-red-600 absolute -top-6 right-0 text-sm">
          {errors.name?.message}
        </p>
      </div>

      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Email"
          className=" rounded-md outline-none bg-gray-200 p-2 w-full"
          {...register("email")}
        />
        <p className="text-red-600 absolute -top-6 right-0 text-sm">
          {errors.email?.message}
        </p>
      </div>

      <div className="relative mt-4">
        <textarea
          placeholder="Message"
          className=" rounded-md outline-none bg-gray-200 p-2 h-32 w-full"
          {...register("message")}
        />
        <p className="text-red-600 absolute -top-6 right-0 text-sm">
          {errors.message?.message}
        </p>
      </div>
      <button
        className=" bg-orange-500 py-2 rounded-md w-full mt-2"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
