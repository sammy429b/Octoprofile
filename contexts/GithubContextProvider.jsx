import React, { useEffect, useState } from "react";
import GithubContext from "./GithubContext";

const GithubContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [repo, setRepo] = useState([]);
  const [lang, setLang] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [statuscode, setStatuscode] = useState("404");

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      if (user !== "") {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const response2 = await fetch(
          `https://api.github.com/users/${user}/repos`
        );
        const data = await response.json();
        const repos = await response2.json();
        setStatuscode(response.status);
        setData(data);
        setRepo(repos);
        // console.log(repos)
      }
      setLoading(false);
    }
    fetchData();
  }, [user]);


  return (
    <GithubContext.Provider
      value={{ data, user, setUser, statuscode, setStatuscode, loading, repo }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContextProvider;
