import { motion } from "framer-motion";
import photo from "../assets/code_image.png";

export default function About() {
  return (
    <div
      id="about"
      className="text-lg font-roboto bg-gray-50
      text-center tracking-wider pt-10"
    >
      <motion.p
        className="mb-10 shadow-sm font-rochester text-3xl border-b-2 w-fit m-auto pb-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 0.5, ease: "linear" }}
        viewport={{ once: true }}
      >
        More about Edwin
      </motion.p>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* <div className=""> */}
        <motion.div className="h-[50vh]">
          <motion.img
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
            src={photo}
            className=" object-cover rounded-xl h-full"
          />
        </motion.div>
        <motion.div className=" md:w-[40vw]">
          <p className="text-blue-600 uppercase">About me</p>
          <p className=" text-gray-700 pt-5 text-start px-10 ">
            Hi, my name is Emmanuel, and I'm a Frontend Developer. My passion
            and daily goal is to create and develop a clean user interface for
            my users while maintaining a clean code. I have adequate and strong
            knowledge in react.js, which is currently my main stack in
            combination with Tailwind CSS and TypeScript.
          </p>
        </motion.div>
      </div>
      {/* </div> */}
    </div>
  );
}
