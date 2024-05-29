import { motion } from "framer-motion";
import { Project } from "./Projects";
import { Button, ButtonGroup, Typography } from "@mui/material";

// received project props
interface ProjectProps {
  project: Project;
  odd: boolean;
}
export default function SingleProject({ project, odd }: ProjectProps) {
  return (
    // single project
    <>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        viewport={{ once: true }}
        key={project.title}
        className="lg:flex m-auto lg:w-[65%] gap-10 py-10 items-center md:w-[80%]"
      >
        <div className={`lg:w-[80%] h-[40vh] m-auto lg:${odd && "hidden"}`}>
          <img
            src={project.image}
            alt=""
            className="object-fill h-full w-full rounded-xl"
          />
        </div>
        <div className=" pt-5 md:pt-0">
          <div>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
              className=" uppercase"
            >
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.about}
            </Typography>
          </div>
          <ButtonGroup className="pt-5">
            <Button
              // sx={{ }}
              className="hover:bg-emerald-600"
              onClick={() => window.open(`${project.demo}`, "_blank")}
              size="small"
              sx={{ ":hover": { bgcolor: "blue", color: "white" } }}
            >
              Live Demo
            </Button>
            <Button
              onClick={() => window.open(`${project.github}`, "_blank")}
              size="small"
              sx={{ ":hover": { bgcolor: "blue", color: "white" } }}
            >
              Github
            </Button>
          </ButtonGroup>
        </div>
        <div className={`lg:w-[80%] h-[40vh] m-auto lg:${!odd && "hidden"}`}>
          <img
            src={project.image}
            alt=""
            className="object-fill h-full w-full rounded-xl"
          />
        </div>
      </motion.div>
    </>
  );
}
