import React from "react";
import moment from "moment";
const User = () => {
    const data = {
        "login": "sammy429b",
        "id": 97588853,
        "node_id": "U_kgDOBdEWdQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/97588853?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sammy429b",
        "html_url": "https://github.com/sammy429b",
        "followers_url": "https://api.github.com/users/sammy429b/followers",
        "following_url": "https://api.github.com/users/sammy429b/following{/other_user}",
        "gists_url": "https://api.github.com/users/sammy429b/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sammy429b/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sammy429b/subscriptions",
        "organizations_url": "https://api.github.com/users/sammy429b/orgs",
        "repos_url": "https://api.github.com/users/sammy429b/repos",
        "events_url": "https://api.github.com/users/sammy429b/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sammy429b/received_events",
        "type": "User",
        "site_admin": false,
        "name": "SAMARTH BAHIRGONDE",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "Frontend Web Developer | \r\nFinal year engineering student in Marathwada Mitra Mandal's College of Engineering.  ",
        "twitter_username": null,
        "public_repos": 18,
        "public_gists": 0,
        "followers": 3,
        "following": 5,
        "created_at": "2022-01-12T07:32:35Z",
        "updated_at": "2023-08-22T20:01:40Z"
      }
  return (
    <>
      <div
        id="user-details"
        className="flex bg-[#1f2a48] text-[#dce3e9] w-[90%] lg:w-[45%] h-[20rem] p-4 rounded-lg"
      >
        <div id="user-img" className="w-[8rem] rounded-[rem]">
          <a href={`https://github.com/${data.login}`}>
            <img
              src={data.avatar_url}
              alt=""
              className="w-[8rem] rounded-[4rem] object-cover"
            />
          </a>
        </div>
        <div id="user-info" className="px-6 w-full">
          <div id="name" className="flex justify-between">
            <p className="text-2xl ">{data.name}</p>
            <p className="text-base">
              Joined {moment(data.created_at).format("l")}
            </p>
          </div>
          <div className="text-violet-800">
            <p>@{data.login}</p>
          </div>
          <div className="mt-2 text-justify">
            <p className="text-sm">{data.bio}</p>
          </div>
          <div className="mt-6 w-full h-[5rem] rounded-lg flex justify-center items-center bg-[#141c2f]">
            <div className="w-[31%] flex flex-col items-center justify-center gap-y-1">
              <a
                href={`https://github.com/${data.login}?tab=repositories`}
                target="_blank"
                className="text-sm"
              >
                Repos
              </a>
              <p className="text-xl font-medium">{data.public_repos}</p>
            </div>
            <div className="w-[31%] flex flex-col items-center justify-center gap-y-1">
              <a
                href={`https://github.com/${data.login}?tab=followers`}
                target="_blank"
                className="text-sm"
              >
                Followers
              </a>
              <p className="text-xl font-medium">{data.followers}</p>
            </div>
            <div className="w-[31%] flex flex-col items-center justify-center gap-y-1">
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
    </>
  );
};

export default User;
