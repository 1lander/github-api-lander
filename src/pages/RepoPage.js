import React from "react";
import useRepos from "./../hooks/useRepos";
import RepoListItem from "./../components/RepoListItem";

const RepoPage = ({ userName }) => {
  const { repos } = useRepos(userName);

  return (
    <div class="flex justify-center flex-wrap gap-5">
      {repos.map(({ name, created_at, language }) => (
        <RepoListItem name={name} created_at={created_at} language={language} />
      ))}
    </div>
  );
};

export default RepoPage;
