import { Project } from "./Projects";
import { Button, ButtonGroup, Typography } from "@mui/material";

interface SliderProps {
  projects: Project[];
}
export default function ProjectSlider({ projects }: SliderProps) {
  return (
    <div className="mx-4 my-10 ">
      {/* <Slider {...settings}> */}
      {projects?.map((project: Project) => (
        <div
          key={project.title}
          className="lg:flex m-auto lg:w-[65%] gap-10 py-10 items-center md:w-[80%]"
        >
          <div className="lg:w-[80%] h-[40vh] m-auto">
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
              >
                Live Demo
              </Button>
              <Button
                onClick={() => window.open(`${project.github}`, "_blank")}
                size="small"
              >
                Github
              </Button>
            </ButtonGroup>
          </div>
        </div>
      ))}
      {/* </Slider> */}
    </div>
  );
}
