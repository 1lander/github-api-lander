import React from "react";
import useRepos from "./../hooks/useRepos";
import RepoListItem from "./../components/RepoListItem";

const RepoPage = ({ userName }) => {
  const { repos, loading } = useRepos(userName);

  return (
    <>
      {loading ? (
        <h1 class="text-center text-7xl">Loading...</h1>
      ) : (
        <div class="flex justify-center flex-wrap gap-5">
          {repos.map(({ name, created_at, language }, index) => (
            <RepoListItem
              key={index}
              name={name}
              created_at={created_at}
              language={language}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default RepoPage;
