import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  // schema for yup resolver
  const schema = yup.object().shape({
    name: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    message: yup.string().min(3).max(100).required(),
  });

  // useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // submit/send message function
  const submit = (data: { name: string; email: string; message: string }) => {
    // emailJs params
    const serviceID = "service_s6ehvor";
    const publicKey = import.meta.env.VITE_MY_KEY;
    const templateID = "template_y8pnh98";

    // data to be sent to mail
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "emirael",
      message: data.message,
    };

    // send message
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        // alert on success and clear input feild
        reset();
        alert(`Message sent successfully`);
      })
      .catch(() => {
        // alert err message on err and clear input feild
        reset();
        alert(`unable to send message, please try again`);
      });
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="w-96">
      <p className="text-lg mt-10 font-bold lg:hidden">Get in touch</p>

      {/* name feild */}
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Name"
          className="input"
          {...register("name")}
        />
        <p className="error">{errors.name?.message}</p>
      </div>

      {/* email feild */}
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Email"
          className="input"
          {...register("email")}
        />
        <p className="error">{errors.email?.message}</p>
      </div>

      {/* message feild */}
      <div className="relative mt-4">
        <textarea
          placeholder="Message"
          className="input h-32"
          {...register("message")}
        />
        <p className="error">{errors.message?.message}</p>
      </div>

      {/* send button */}
      <button
        className=" bg-orange-500 py-2 rounded-md w-full mt-2 hover:bg-gray-950
         hover:text-orange-500 transition-all duration-200 ease-linear"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
