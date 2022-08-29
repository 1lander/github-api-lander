import React from "react";
import useRepos from "./../hooks/useRepos";
import RepoListItem from "./../components/RepoListItem";

const RepoPage = ({ userName }) => {
  const { repos } = useRepos(userName);

  return (
    <div class="flex flex-wrap gap-5 ml-40	mr-40	">
      {repos.map(({ name, commits_url, created_at, description, language }) => (
        <RepoListItem
          name={name}
          commits_url={commits_url}
          created_at={created_at}
          description={description}
          language={language}
        />
      ))}
    </div>
  );
};

export default RepoPage;
