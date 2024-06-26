import { motion } from "framer-motion";
import photo from "../../assets/code_image.png";

export default function About() {
  return (
    <div
      id="about"
      className="text-lg text-center tracking-wider py-20 bg-blue-50"
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
        <motion.div className="h-[50vh]">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
            src={photo}
            className=" object-cover rounded-xl h-full"
          />
        </motion.div>

        <motion.div className=" md:w-[40vw]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-blue-600 uppercase font-bold underline">
              About me
            </p>

            {/* about */}
            <p className=" text-gray-700 pt-5 text-start px-10 ">
              Hello, my name is Emmanuel and I am a Frontend Developer. My
              passion and daily goal is to design and develop a clean user
              interface for my users while maintaining clean code. I have
              adequate and strong knowledge of react.js, which is currently my
              primary stack, along with Tailwind CSS and TypeScript.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
