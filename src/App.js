import React from "react";
import useRepos from "./hooks/useRepos";
import RepoListItem from "./components/RepoListItem";
import Header from "./components/Header";

const App = () => {
  const { repos } = useRepos();
  console.log(repos);
  return (
    <>
      <Header />
      <div class="flex flex-wrap gap-5">
        {repos.map(
          ({ name, commits_url, created_at, description, language }) => (
            <RepoListItem
              name={name}
              commits_url={commits_url}
              created_at={created_at}
              description={description}
              language={language}
            />
          )
        )}
      </div>
    </>
  );
};

export default App;
