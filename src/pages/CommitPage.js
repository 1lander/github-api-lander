import React from "react";
import CommitListItem from "../components/CommitListItem";
import useCommits from "../hooks/useCommits";
import { useLocation } from "react-router-dom";

const CommitPage = () => {
  const { state } = useLocation();
  console.log(state);

  const { commits } = useCommits(state.name);

  return (
    <div class="flex flex-wrap gap-5 ml-40	mr-40	">
      {commits.map(({ commit }) => (
        <CommitListItem name={commit.message} />
      ))}
    </div>
  );
};

export default CommitPage;
