import { motion } from "framer-motion";

// received stack props
interface StackProps {
  stack: { name: string; icon: string; level: string };
}
export default function StackTemplate({ stack }: StackProps) {
  return (
    <motion.div
      className="shadow md:shadow-none flex items-center py-2 "
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="w-7 my-3 mx-3">
        <img
          src={stack.icon}
          alt={`${stack.name} photo`}
          className=" w-full object-contain rounded-full"
        />
      </div>
      <div className=" text-start mx-3">
        <p className=" uppercase text-gray-800 font-bold">{stack.name}</p>
        <p className=" text-gray-500">{stack.level}</p>
      </div>
    </motion.div>
  );
}
