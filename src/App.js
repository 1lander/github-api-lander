import React from "react";
import useRepos from "./hooks/useRepos";
import RepoListItem from "./components/RepoListItem";
import Header from "./components/Header";
import useUser from "./hooks/useUser";

const App = () => {
  const userName = "1lander";
  const { repos } = useRepos(userName);
  const { user } = useUser(userName);

  return (
    <>
      <Header title={user?.name} avatar_url={user?.avatar_url} />
      <div class="flex flex-wrap gap-5 ml-40	mr-40	">
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
