import React from 'react'
import moment from 'moment'
const User = ({ data }) => {
    return (
        <>
            <div id='user-details' className='flex bg-[#1f2a48] text-[#dce3e9] w-[45%] h-[20rem] p-4 rounded-lg'>
                <div id='user-img' className='w-[8rem] rounded-[rem]'>
                    <img src={data.avatar_url} alt="" className='w-[8rem] rounded-[4rem] object-cover' />
                </div>
                <div id='user-info' className='px-6 w-full'>
                    <div id='name' className='flex justify-between'>
                        <p className='text-2xl '>{data.name}</p>
                        <p className='text-base'>Joined {moment(data.created_at).format('l')}</p>
                    </div>
                    <div className='text-violet-800'>
                        <p>@{data.login}</p>
                    </div>
                    <div className='mt-2 text-justify'>
                        <p className='text-sm'>{data.bio}</p>
                    </div>
                    <div className='mt-6 w-full h-[5rem] rounded-lg flex justify-center items-center bg-[#141c2f]'>
                        <div className='w-[31%] flex flex-col items-center justify-center gap-y-1'>
                            <p className='text-sm'>Repos</p>
                            <p className='text-xl font-medium'>{data.public_repos}</p>
                        </div>
                        <div className='w-[31%] flex flex-col items-center justify-center gap-y-1'>
                            <p className='text-sm'>Followers</p>
                            <p className='text-xl font-medium'>{data.followers}</p>
                        </div>
                        <div className='w-[31%] flex flex-col items-center justify-center gap-y-1'>
                            <p className='text-sm'>Following</p>
                            <p className='text-xl font-medium'>{data.following}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
