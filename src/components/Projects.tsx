import social_media from "../assets/projects/social_media_image.png";
import todo from "../assets/projects/todo_image.png";
import e_commerce from "../assets/projects/e_commerce_image.png";
import church from "../assets/projects/church_image.png";
import movie from "../assets/projects/movie_image.png";
import ProjectSlider from "./Slider";

export interface Project {
  title: string;
  image: string;
  about: string;
  demo: string;
  github: string;
}
export default function Projects() {
  const projects: Project[] = [
    {
      image: e_commerce,
      title: "e-commerce app",
      github: "https://github.com/Emiraell/ecommerce_web_store",
      demo: "https://emiraell.github.io/ecommerce_web_store/",
      about:
        "Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the",
    },
    {
      image: movie,
      title: "Movie info app",
      github: "https://github.com/Emiraell/movie_info_rating_app",
      demo: "https://emiraell.github.io/movie_info_rating_app/",
      about:
        "Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the",
    },
    {
      image: todo,
      title: "Advanced todolist-app",
      github: "https://github.com/Emiraell/advanced_todolist_app",
      demo: "https://emiraell.github.io/advanced_todolist_app/",
      about:
        "Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the",
    },
    {
      image: church,
      title: "My church website",
      github: "https://github.com/Emiraell/my-church-web",
      demo: "https://emiraell.github.io/my-church-web/",
      about:
        "Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the",
    },
    {
      image: social_media,
      title: "Social media app",
      github: "https://github.com/Emiraell/social-media",
      demo: "https://emiraell.github.io/social-media/",
      about:
        "Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the",
    },
  ];
  return (
    <div className=" bg-gray-50 pt-10 text-center text-lg">
      <p className="text-blue-600 uppercase font-bold underline">Projects</p>
      <div>
        <ProjectSlider projects={projects} />
      </div>
    </div>
  );
}
