import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const RepoListItem = ({ name, created_at, language }) => {
  const langColors = {
    JavaScript: "bg-JavaScript",
    HTML: "bg-HTML",
    CSS: "bg-CSS",
    TypeScript: "bg-TypeScript",
    Java: "bg-Java",
    "C#": "bg-CSharp",
    Python: "bg-Python",
    Shell: "bg-Shell",
    Go: "bg-Go",
  };

  return (
    <Link
      class="block p-5 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative"
      to="/commit"
      state={{ name }}
    >
      <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      {/* {description && (
        <div class="font-normal text-gray-400">{description}</div>
      )} */}
      <div class="mb-2 flex gap-1 items-center">
        <div class={`w-4 h-4 ${langColors[language]} rounded-full`}></div>
        <div class="font-normal text-gray-400">{language}</div>
      </div>

      <p class="font-normal text-gray-700 dark:text-gray-500 absolute bottom-1 right-2">
        {moment(created_at).format("DD/MM/YY")}
      </p>
    </Link>
  );
};

export default RepoListItem;
