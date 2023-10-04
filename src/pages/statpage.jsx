import React, { useContext } from "react";
import moment from "moment";
import User from "../components/User";
import GithubContext from "../../contexts/GithubContext";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
const Statpage = () => {

    const info = useContext(GithubContext);
    const data = info.data;
    const { user, setUser, statuscode, loading, repo } = useContext(GithubContext);
    const router = useNavigate();
    if(loading){
      return (<Spinner/>)
    }

  return (
    <>
      <div
        id="container"
        className="w-full h-[26rem] flex justify-center bg-[#1f2a48] "
      >
        <div
          id="user-details"
          className="flex flex-col items-center bg-[#1f2a48] text-[#dce3e9] w-[100%] lg:w-[45%] h-[26rem] p-4 "
        >
          <div id="user-img" className="w-[9rem] rounded-[rem]  ">
            
              <img
                src={data.avatar_url}
                alt=""
                className="w-[9rem] rounded-[6rem] object-cover border-8 border-violet-800"
              />
          </div>
          <div id="user-info" className="px-6 w-full mt-4">
            <div id="name" className="flex flex-col items-center gap-y-2">
              <p className="text-4xl ">{data.name}</p>
              <a href={`https://github.com/${data.login}`} target="_blank">
              <p className="text-violet-800 text-2xl text-center">
                @{data.login}
              </p>
              </a>
              <p className="text-md">
                Joined {moment(data.created_at).format("l")}
              </p>
            </div>
            {/* <div className="mt-2 text-justify">
              <p className="text-sm">{data.bio}</p>
            </div> */}
            <div className="mt-6 w-full h-[5rem] rounded-lg flex justify-center items-center gap-x-4 ">
              <div className="w-[31%] h-[5rem] rounded flex flex-col items-center justify-center gap-y-1  bg-[#141c2f]">
                <a
                  href={`https://github.com/${data.login}?tab=repositories`}
                  target="_blank"
                  className="text-sm"
                >
                  Repos
                </a>
                <p className="text-xl font-medium">{data.public_repos}</p>
              </div>
              <div className="w-[31%] h-[5rem] rounded flex flex-col items-center justify-center gap-y-1 bg-[#141c2f]">
                <a
                  href={`https://github.com/${data.login}?tab=followers`}
                  target="_blank"
                  className="text-sm "
                >
                  Followers
                </a>
                <p className="text-xl font-medium">{data.followers}</p>
              </div>
              <div className="w-[31%] h-[5rem] rounded flex flex-col items-center justify-center gap-y-1  bg-[#141c2f]">
                <a
                  href={`https://github.com/${data.login}?tab=followings`}
                  target="_blank"
                  className="text-sm"
                >
                  Following
                </a>
                <p className="text-xl font-medium">{data.following}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl my-4 w-[92%] font-semibold mx-[4%] border-b-4 border-dashed py-1">Top repos</h3>
      <div className="max-h-screen w-[95%] mx-[2.5%] mb-4 bg-slate-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {repo.map((item) => (
          <a href={item.clone_url} target="_blank">
          <Card repo={item}/>
          </a>
        ))}
      </div>
    </>
  );
};

export default Statpage;
