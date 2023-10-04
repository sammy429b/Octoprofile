import moment from "moment";
import useSWR from "swr";
import User from "./components/User";
import { useRef, useState } from "react";
import Spinner from "./components/Spinner";
import Statpage from "./pages/statpage";
import Search from "./pages/search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GithubContextProvider from "../contexts/GithubContextProvider";

const App = () => {
  return (
    <GithubContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user" element={<Statpage />} />
        </Routes>
      </BrowserRouter>
    </GithubContextProvider>
  );
};

export default App;
