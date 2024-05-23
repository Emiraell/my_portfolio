import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emirael from "../assets/emirael.jpg";
export default function Hero() {
  return (
    <div
      id="home"
      className="text-lg font-roboto bg-gradient-to-t from-blue-50
		 to-gray-50 h-[100vh] text-center tracking-wider"
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex gap-14 flex-col md:flex-row items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              <p>
                Hi, I'm
                <span className=" tracking-normal py-1 font-bold text-2xl md:text-3xl text-purple-600 block">
                  Edwin Emmanuel
                </span>
              </p>
              <p className=" font-semibold text-gray-600 text-xl">
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
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open("https://linkedin.com/in/emirael", "_blank")
                }
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </motion.div>
          </div>
          <div className="w-48">
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
        </div>
      </div>
    </div>
  );
}
