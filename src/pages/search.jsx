import React, { useContext, useState, useEffect } from 'react';
import useSWR from 'swr';
import GithubContext from '../../contexts/GithubContext';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  let router = useNavigate();
  const [name, setName] = useState('sammy429b');
  const { user, setUser, statuscode } = useContext(GithubContext);

  const handleClick = (e) => {
    e.preventDefault();
    router('/' + name);
  };


  return (
    <>
      <div className='w-full h-[100vh] flex flex-col items-center pt-[8rem] bg-[#141c2f] text-white'>
        <form action="" className='w-[90%] lg:w-[45%] h-[8rem]' onSubmit={handleClick}>
          <h1 className='text-xl font-semibold mb-4'>github-user</h1>
          <div id='search-bar' className=' bg-[#1f2a48]  w-full h-[4rem] p-2 flex items-center justify-around rounded-lg'>
            <p className='h-[2rem] mt-2 bg-[#1f2a48] text-violet-800'> <i className="fa-solid fa-magnifying-glass" ></i> </p>
            <input type="text" placeholder='Search GITHUB username...'
              onChange={(e) => setName(e.target.value)}
              className='w-[80%] h-[2rem] bg-[#1f2a48] boder-red-500 p-2 outline-none' />
            <input type='submit' className='w-[5rem] h-[2.3rem] rounded-md bg-violet-800 text-white hover:cursor-pointer' value='Search'/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
