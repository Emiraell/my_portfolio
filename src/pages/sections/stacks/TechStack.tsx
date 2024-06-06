import ts from "../../../assets/stacks/typescript.svg";
import js from "../../../assets/stacks/javascript.svg";
import git from "../../../assets/stacks/git.svg";
import html from "../../../assets/stacks/html.svg";
import css from "../../../assets/stacks/css.svg";
import mui from "../../../assets/stacks/material-ui.svg";
import react from "../../../assets/stacks/react.svg";
import tailwind from "../../../assets/stacks/tailwind.svg";
import StackTemplate from "./StackTemplate";

export default function TechStack() {
  // tech stacks list
  const stacks: { name: string; icon: string }[] = [
    { name: "html", icon: html },
    { name: "css", icon: css },
    { name: "javascript", icon: js },
    { name: "react", icon: react },
    { name: "typescript", icon: ts },
    { name: "tailwind css", icon: tailwind },
    { name: "Git", icon: git },
    { name: "material ui", icon: mui },
  ];
  return (
    <div id="stack" className=" bg-gray-50 py-20 text-center pb-10">
      <p className="text-blue-600 uppercase font-bold  pb-5"> Tech Stacks</p>
      <div
        className="h-36 border border-gray-300 m-auto md:w-[70vw] w-[90%]
      bg-gray-50 rounded-xl overflow-y-scroll flex flex-col md:flex-row md:justify-around"
      >
        <div>
          {/* first four stack display */}
          {stacks.slice(0, 4).map((stack) => (
            <StackTemplate stack={stack} key={stack.name} />
          ))}
        </div>
        <div>
          {/* last four stack display */}
          {stacks.slice(4, 8).map((stack) => (
            <StackTemplate stack={stack} key={stack.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
