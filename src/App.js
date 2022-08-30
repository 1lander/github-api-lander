import React from "react";
import Header from "./components/Header";
import useUser from "./hooks/useUser";
import CommitPage from "./pages/CommitPage";
import RepoPage from "./pages/RepoPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const userName = "1lander";
  const { user } = useUser(userName);

  return (
    <>
      <Header
        title={user?.name ? user?.name : user?.login}
        avatar_url={user?.avatar_url}
      />
      <Routes>
        <Route path="/" element={<RepoPage userName={userName} />} />
        <Route
          path="commit"
          element={<CommitPage repoName={"Amplify-translation-react"} />}
        />
      </Routes>
    </>
  );
};

export default App;
