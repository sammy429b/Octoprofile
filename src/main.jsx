import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GithubContextProvider from "../contexts/GithubContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GithubContextProvider >
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </GithubContextProvider>
);
