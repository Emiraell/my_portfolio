import social_media from "../../../assets/projects/social_media_image.png";
import todo from "../../../assets/projects/todo_image.png";
import e_commerce from "../../../assets/projects/e_commerce_image.png";
import church from "../../../assets/projects/church_image.png";
import movie from "../../../assets/projects/movie_image.png";
import SingleProject from "./SingleProject";

// project data interface
export interface Project {
  title: string;
  image: string;
  about: string;
  demo: string;
  github: string;
}
export default function Projects() {
  // projects
  const projects: Project[] = [
    {
      image: e_commerce,
      title: "e-commerce app",
      github: "https://github.com/Emiraell/ecommerce_web_store",
      demo: "https://emiraell.github.io/ecommerce_web_store/",
      about:
        "An ecommerce project built with React as the primary stack. This website includes many features, such as product sorting, adding items to cart, viewing product information, and so on. The products for this project were extracted from the fake product API.",
    },
    {
      image: movie,
      title: "Movie info app",
      github: "https://github.com/Emiraell/movie_info_rating_app",
      demo: "https://emiraell.github.io/movie_info_rating_app/",
      about:
        "This website allows users to search for and obtain vital information about any movie of their choice, as well as rate the movie. This project was built using react as the main stack, and the movies were obtained from The Movie Database (TMDB).",
    },
    {
      image: todo,
      title: "Advanced todolist-app",
      github: "https://github.com/Emiraell/advanced_todolist_app",
      demo: "https://emiraell.github.io/advanced_todolist_app/",
      about:
        "An advanced todolist project was created using react as the main stack. This project also allows the user to add and remove tasks/events. This project also includes the completed task/event functionality.",
    },
    {
      image: church,
      title: "My church website",
      github: "https://github.com/Emiraell/my-church-web",
      demo: "https://emiraell.github.io/my-church-web/",
      about:
        "My church website project, which was primarily built using React. This website provides multi-page functionality and allows users to navigate them freely.",
    },
    {
      image: social_media,
      title: "Social media app",
      github: "https://github.com/Emiraell/social-media",
      demo: "https://emiraell.github.io/social-media/",
      about:
        "A mini social media project built with react as the main stack. This project gives users the ability to create, like, delete, and comment on posts. Firebase served as the project's database.",
    },
  ];
  return (
    <div className="py-20 text-center text-lg bg-blue-50" id="project">
      <p className="text-blue-600 uppercase font-bold underline">Projects</p>
      <div className="mx-4 my-5">
        {/* project listing */}
        {projects.map((project: Project, index: number) =>
          index === 1 || index === 3 ? (
            <SingleProject project={project} key={project.title} odd={true} />
          ) : (
            <SingleProject project={project} odd={false} />
          )
        )}
      </div>
    </div>
  );
}
