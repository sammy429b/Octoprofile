import moment from 'moment'
import useSWR from 'swr'
import User from './User'
import { useRef, useState } from 'react'
import Spinner from './Spinner'

const App = () => {
  let s = useRef("")
  const[username, setUserName] = useState('')
  const[name, setName] = useState('')
  const handleSearch = (event) =>{
    event.preventDefault()
    setUserName(name)
  }
  const URL = `https://api.github.com/users/${username}`
  const fetcher = async (event) => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    return data
  }
  const { data, error, isLoading } = useSWR(URL,fetcher)
  if (error) {
    return (<h2>error</h2>)
  }
  if (isLoading) {
    return (<Spinner/>)
  }

  return (
    <>
      <div className='w-full h-[100vh] flex flex-col items-center justify-center pb-[10rem] bg-[#141c2f] text-white'>

        <form action="" className='w-[45%] h-[8rem]' onSubmit={handleSearch}>
          <h1 className='text-xl font-semibold mb-4'>github-user</h1>
          <div id='search-bar' className=' bg-[#1f2a48]  w-full h-[4rem] p-2 flex items-center justify-around rounded-lg'>
          <p className='h-[2rem] mt-2 bg-[#1f2a48] text-violet-800'> <i className="fa-solid fa-magnifying-glass" ></i> </p>
            <input type="text" placeholder='Search GITHUB username...'
            onChange={(e)=> setName(e.target.value) }
            className='w-[80%] h-[2rem] bg-[#1f2a48] boder-red-500 p-2 outline-none' />
            <input type='submit' className='w-[5rem] h-[2.3rem] rounded-md bg-violet-800 text-white' value='Search'/>
          </div>
        </form>
          <User data={data}/>
      </div>
    </>
  )
}

export default App
