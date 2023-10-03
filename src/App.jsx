import moment from 'moment'
import useSWR from 'swr'
import User from './components/User'
import { useRef, useState } from 'react'
import Spinner from './components/Spinner'
import Statpage from './pages/statpage'
import Search from './pages/search'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Githubprovider from './context/GithubContextProvider'
// import Githubprovider from './context/githubprovider'

const App = () => {
console.log(hello)
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/about" element={<Statpage />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
