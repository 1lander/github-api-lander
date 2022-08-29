import React from "react";
import Header from "./components/Header";
import useUser from "./hooks/useUser";
import CommitPage from "./pages/CommitPage";
import RepoPage from "./pages/RepoPage";

const App = () => {
  const userName = "1lander";
  const { user } = useUser(userName);

  return (
    <>
      <Header title={user?.name} avatar_url={user?.avatar_url} />
      <RepoPage userName={userName} />
      <CommitPage repoName={"Amplify-translation-react"} />
    </>
  );
};

export default App;
