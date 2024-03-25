import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import User from "../components/User";
import GithubContext from "../../contexts/GithubContext";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const Statpage = () => {

  const { user, data, repo, setUser, statuscode, loading } = useContext(GithubContext);
  const [pieChartData, setPieChartData] = useState([]);
  useEffect(() => {
    //COUNT LANUAGE
    let lang = {};
    repo.map((item) => {
      if (item.language in lang) {
        if (item.language !== null) {
          lang[item.language] += 1;
        }
      } else {
        if (item.language !== null) {
          lang[item.language] = 1;
        }
      }
    });

    let langArray = [];
    for (let key in lang) {
      langArray.push({
        language: key,
        size: lang[key],
      });
    }

    langArray.sort((a, b) => b.size - a.size);
    setPieChartData(langArray);
  }, [repo]);

  const datas = {
    labels: pieChartData.map((item) => item.language),
    datasets: [
      {
        label: 'langauge',
        data: pieChartData.map((item) => item.size),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const router = useNavigate();

  // use :user as a parameter
  let { username } = useParams();

  useEffect(() => {
    setUser(username);
  }, []);





  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div
        id="container"
        className="w-full h-[30rem] flex justify-center bg-[#1f2a48] "
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

      <div className="w-full  flex justify-center items-center">
        <div className="w-1/4 bg-white shadow-2xl p-4 rounded" >
          <Pie data={datas} className="w-[50%]" />;
        </div>
      </div>

      <div>
        <h3 className="text-2xl my-4 w-[92%] font-semibold mx-[4%] border-b-4 border-dashed py-1">
          Top repos

        </h3>
        <div className="max-h-screen w-[95%] mx-[2.5%] mb-4 bg-slate-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {user !== "" &&
            repo.map((item) => (
              <a key={item.id} href={item.clone_url} target="_blank">
                <Card repo={item} />
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default Statpage;
