export default function Contact() {
  return (
    <div className="text-center py-5">
      <div>
        <p className="text-blue-600 uppercase font-bold underline text-lg">
          Contact
        </p>
      </div>
      <div className=" lg:flex justify-around items-center">
        <div>
          <p className=" font-semibold text-xl hidden lg:block pb-6">
            let's work together
          </p>
          <div className=" text-start">
            <div>
              <p className=" font-semibold text-lg">Mail</p>
              <span>emmzex19@gmail.com</span>
            </div>
            <div>
              <p className=" font-semibold text-lg">Address</p>
              <span>Abuja, Nigeria</span>
            </div>
            <div>
              <p className=" font-semibold text-lg">Phone</p>
              <span>+2348136553986</span>
            </div>
          </div>
        </div>
        <form className="flex-col gap-4 w-80 hidden lg:flex">
          <input
            type="text"
            placeholder="Name"
            className=" rounded-md outline-none bg-gray-50 p-2"
          />
          <input
            type="text"
            placeholder="Email"
            className=" rounded-md outline-none bg-gray-50 p-2"
          />
          <textarea
            name=""
            placeholder="Message"
            className=" rounded-md outline-none bg-gray-50 p-2 h-32"
          />
          <button className=" bg-orange-500 py-2 rounded-md" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
