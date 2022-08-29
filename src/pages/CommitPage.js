import React from "react";
import useCommits from "../hooks/useCommits";

const CommitPage = ({ repoName }) => {
  const { commits } = useCommits(repoName);
  console.log(commits);
  return (
    <div class="flex flex-wrap gap-5 ml-40	mr-40	">
      {commits.map(({ commit }) => (
        <div>{commit.message}</div>
      ))}
    </div>
  );
};

export default CommitPage;
