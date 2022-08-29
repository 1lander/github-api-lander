import { useEffect, useState } from "react";

const useRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    try {
      setLoading(true);
      await fetch("https://api.github.com/users/1lander/repos")
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
