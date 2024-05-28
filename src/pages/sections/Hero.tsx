import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emirael from "../../assets/emirael.jpg";
export default function Hero() {
  return (
    <div
      id="hero"
      className="text-lg font-roboto bg-gradient-to-t from-gray-50
		 to-gray-50 h-[100vh] text-center tracking-wider"
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex gap-16 flex-col lg:flex-row items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              <p className=" text-2xl">
                Hi, I'm
                <span className=" tracking-normal py-1 text-nowrap font-bold text-4xl md:text-5xl lg:text-6xl text-blue-600 block">
                  Edwin Emmanuel
                </span>
              </p>
              <p className=" font-semibold text-gray-600 text-3xl md:text-4xl">
                Frontend Developer
              </p>
            </motion.div>
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 100, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <IconButton
                onClick={() =>
                  window.open("https://github.com/Emiraell", "_blank")
                }
                sx={{ ":hover": { opacity: 0.9 }, color: "black" }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open("https://linkedin.com/in/emirael", "_blank")
                }
              >
                <LinkedInIcon
                  sx={{ ":hover": { opacity: 0.7 }, color: "blue" }}
                  fontSize="large"
                />
              </IconButton>
            </motion.div>
          </div>
          <div className=" w-72 md:w-80">
            <motion.img
              className=" object-contain rounded-full"
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 100, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              viewport={{ once: true }}
              src={emirael}
              alt="emirael_dev photo"
            />
          </div>
          <div className=" overflow-hidden absolute text-4xl lg:text-7xl md:text-5xl -bottom-32 text-nowrap text-blue-100 font-bold">
            <motion.p
              className="uppercase"
              initial={{ x: "90%", opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ delay: 3.5 }}
              animate={{
                x: "-105%",
                transition: {
                  repeat: Infinity,
                  duration: 16,
                  repeatType: "mirror",
                  delay: 3,
                },
              }}
            >
              Front end developer
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
