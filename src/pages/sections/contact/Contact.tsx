import ContactForm from "./Form";

export default function Contact() {
  return (
    // contact details
    <div
      className="text-center py-20  m-auto md:w-[70%] w-[90%] lg:w-full bg-gray-50"
      id="contact"
    >
      <div>
        <p className="text-blue-600 uppercase font-bold underline text-lg pb-6">
          Contact
        </p>
      </div>
      <div className=" lg:flex justify-around items-center">
        <div className=" text-start">
          <p className=" font-semibold text-lg md:text-xl lg:block pb-6 italic text-blue-400 ">
            let's work together
          </p>
          <div className="mx-10 md:mx-0">
            <div>
              <p className="detail ">Mail</p>
              <span>emmzex19@gmail.com</span>
            </div>
            <div className="py-3">
              <p className="detail">Address</p>
              <span>Abuja, Nigeria</span>
            </div>
            <div>
              <p className="detail">Phone</p>
              <span>+2348136553986</span>
            </div>
          </div>
        </div>

        {/* message form */}
        <ContactForm />
      </div>
    </div>
  );
}
