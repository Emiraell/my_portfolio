import ts from "../assets/stacks/typescript.svg";
import js from "../assets/stacks/javascript.svg";
import git from "../assets/stacks/git.svg";
import html from "../assets/stacks/html.svg";
import css from "../assets/stacks/css.svg";
import mui from "../assets/stacks/material-ui.svg";
import react from "../assets/stacks/react.svg";
import tailwind from "../assets/stacks/tailwind.svg";
import StackTemplate from "./StackTemplate";

export default function TechStack() {
  const stacks: { name: string; icon: string; level: string }[] = [
    { name: "html", icon: html, level: "Experienced" },
    { name: "css", icon: css, level: "Experienced" },
    { name: "javascript", icon: js, level: "Experienced" },
    { name: "react", icon: react, level: "Intermediate" },
    { name: "typescript", icon: ts, level: "Intermediate" },
    { name: "tailwind css", icon: tailwind, level: "Intermediate" },
    { name: "Git", icon: git, level: "Intermediate" },
    { name: "material ui", icon: mui, level: "Intermediate" },
  ];
  return (
    <div id="stack" className=" bg-gray-50 py-20 text-center pb-10">
      <p className="text-blue-600 uppercase font-bold  pb-5"> Tech Stacks</p>
      <div
        className="h-44 border border-gray-300 m-auto md:w-[70vw] w-[90%]
      bg-gray-50 rounded-xl overflow-y-scroll flex flex-col md:flex-row md:justify-around"
      >
        <div>
          {stacks.slice(0, 4).map((stack) => (
            <StackTemplate stack={stack} key={stack.name} />
          ))}
        </div>
        <div>
          {stacks.slice(4, 8).map((stack) => (
            <StackTemplate stack={stack} key={stack.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
