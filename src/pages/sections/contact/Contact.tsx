import ContactForm from "./Form";

export default function Contact() {
  return (
    <div className="text-center py-20" id="contact bg-gray-50">
      <div>
        <p className="text-blue-600 uppercase font-bold underline text-lg pb-6">
          Contact
        </p>
      </div>
      <div className=" lg:flex justify-around  items-center">
        <div className="">
          <p className=" font-semibold text-lg md:text-xl  lg:block pb-6 italic text-blue-400 ">
            let's work together
          </p>
          <div className=" text-start mx-10 md:mx-0">
            <div>
              <p className=" font-semibold text-lg text-gray-800">Mail</p>
              <span>emmzex19@gmail.com</span>
            </div>
            <div className="py-3">
              <p className=" font-semibold text-lg text-gray-800">Address</p>
              <span>Abuja, Nigeria</span>
            </div>
            <div>
              <p className=" font-semibold text-lg text-gray-800">Phone</p>
              <span>+2348136553986</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
