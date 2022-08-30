import { useEffect, useState } from "react";

const useCommits = (repoName) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCommits();
  }, []);

  const getCommits = async () => {
    try {
      setLoading(true);
      await fetch(`https://api.github.com/repos/1lander/${repoName}/commits`)
        .then((res) => res.json())
        .then((result) => setCommits(result));

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    commits,
    loading,
  };
};

export default useCommits;
