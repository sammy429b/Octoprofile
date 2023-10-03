import React, { useContext } from 'react'
import User from '../components/User'
import GithubContext from '../context/GithubContext'
const Statpage = () => {
  const {name} = useContext(GithubContext)
  return (
    <>
     <div id='user-details' className='flex bg-[#1f2a48] text-[#dce3e9] w-[90%] lg:w-[45%] h-[20rem] p-4 rounded-lg'>
                <div id='user-img' className='w-[8rem] rounded-[rem]'>
                    <a href={`https://github.com/${hub.login}`}>
                    <img src={hub.avatar_url} alt="" className='w-[8rem] rounded-[4rem] object-cover' />
                    </a>
                </div>
                <div id='user-info' className='px-6 w-full'>
                    <div id='name' className='flex justify-between'>
                        <p className='text-2xl '>{hub.name}</p>
                        <p className='text-base'>Joined {moment(hub.created_at).format('l')}</p>
                    </div>
                    <div className='text-violet-800'>
                        <p>@{hub.login}</p>
                    </div>
                    <div className='mt-2 text-justify'>
                        <p className='text-sm'>{hub.bio}</p>
                    </div>
                    <div className='mt-6 w-full h-[5rem] rounded-lg flex justify-center items-center bg-[#141c2f]'>
                        <div className='w-[31%] flex flex-col items-center justify-center gap-y-1'>
                            <a href={`https://github.com/${hub.login}?tab=repositories`} target='_blank' className='text-sm'>Repos</a>
                            <p className='text-xl font-medium'>{hub.public_repos}</p>
                        </div>
                        <div className='w-[31%] flex flex-col items-center justify-center gap-y-1'>
                            <a href={`https://github.com/${hub.login}?tab=followers`} target='_blank' className='text-sm'>Followers</a>
                            <p className='text-xl font-medium'>{hub.followers}</p>
                        </div>
                        <div className='w-[31%] flex flex-col items-center justify-center gap-y-1'>
                            <a href={`https://github.com/${hub.login}?tab=followings`} target='_blank' className='text-sm'>Following</a>
                            <p className='text-xl font-medium'>{hub.following}</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Statpage