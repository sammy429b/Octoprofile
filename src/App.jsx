import moment from "moment";
import useSWR from "swr";
import User from "./components/User";
import { useEffect, useRef, useState } from "react";
import Spinner from "./components/Spinner";
import Statpage from "./pages/statpage";
import Search from "./pages/search";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import GithubContextProvider from "../contexts/GithubContextProvider";
import { useContext } from "react";
import GithubContext from "../contexts/GithubContext";

const App = () => {
  const { setUser } = useContext(GithubContext);

  useEffect(() => {
    if (sessionStorage.getItem("name") !== "" && sessionStorage.getItem("name") !== null){
      setUser(sessionStorage.getItem("name"));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/:username" element={<Statpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

