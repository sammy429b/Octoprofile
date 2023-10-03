import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Githubprovider from './context/GithubContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Githubprovider>
    <App />
    </Githubprovider>
  </React.StrictMode>,
)
