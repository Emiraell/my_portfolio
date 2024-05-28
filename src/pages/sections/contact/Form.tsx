import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function ContactForm() {
  const schema = yup.object().shape({
    name: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    message: yup.string().min(10).max(100).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data: any) => {
    console.log(data);
  };
  return (
    <form
      className="flex-col gap-4 w-96 hidden lg:flex"
      onSubmit={handleSubmit(submit)}
    >
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
      <button className=" bg-orange-500 py-2 rounded-md" type="submit">
        Send
      </button>
    </form>
  );
}
