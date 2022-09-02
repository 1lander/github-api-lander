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
      const filtered = commits.filter(({ commit, committer }) => {
        const lowerCaseInput = input.toLowerCase();
        return (
          commit.message.toLowerCase().includes(lowerCaseInput) ||
          commit.committer.date.includes(lowerCaseInput) ||
          committer.login.toLowerCase().includes(lowerCaseInput)
        );
      });
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
