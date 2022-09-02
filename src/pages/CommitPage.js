import React from "react";
import CommitListItem from "../components/CommitListItem";
import useCommits from "../hooks/useCommits";
import { useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import BackButton from "../components/BackButton";

const CommitPage = () => {
  const { state } = useLocation();
  const { filteredCommits, loading, filterCommits } = useCommits(state.name);

  return (
    <div class="ml-40 mr-40">
      <div class="flex justify-between mb-3">
        <BackButton route="/" />
        <SearchInput onSearch={filterCommits} />
      </div>
      {loading ? (
        <h1 class="text-center text-7xl">Loading...</h1>
      ) : (
        <div class="flex flex-wrap gap-5">
          {filteredCommits.map(({ commit }, index) => (
            <CommitListItem
              key={index}
              name={commit.message}
              date={commit.committer.date}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommitPage;
