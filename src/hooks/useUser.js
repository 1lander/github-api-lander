import { useEffect, useState } from "react";

const useUser = (githubUser) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      setLoading(true);
      await fetch(`https://api.github.com/users/${githubUser}`)
        .then((res) => res.json())
        .then((result) => setUser(result));

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    user,
    loading,
  };
};

export default useUser;
