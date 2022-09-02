import { useEffect, useState } from "react";

const useCommits = (repoName) => {
  const [commits, setCommits] = useState([]);
  const [filteredCommits, setFilteredCommits] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCommits();
  }, []);

  const getCommits = async () => {
    try {
      setLoading(true);
      await fetch(
        `https://api.github.com/repos/1lander/${repoName}/commits?per_page=20`
      )
        .then((res) => res.json())
        .then((result) => {
          setCommits(result);
          setFilteredCommits(result);
        });

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const filterCommits = (input) => {
    if (input && input !== "") {
      const filtered = commits.filter(
        ({ commit, committer }) =>
          commit.message.includes(input) ||
          commit.committer.date.includes(input) ||
          committer.login.includes(input)
      );
      setFilteredCommits(filtered);
    } else {
      setFilteredCommits(commits);
    }
  };

  return {
    filteredCommits,
    loading,
    filterCommits,
  };
};

export default useCommits;
