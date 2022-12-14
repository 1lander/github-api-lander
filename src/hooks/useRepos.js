import { useEffect, useState } from "react";

const useRepos = (githubUser) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    try {
      setLoading(true);
      await fetch(
        `https://api.github.com/users/${githubUser}/repos?per_page=100`
      )
        .then((res) => res.json())
        .then((result) => setRepos(result));

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    repos,
    loading,
  };
};

export default useRepos;
