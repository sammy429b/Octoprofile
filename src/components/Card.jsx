import React from "react";

const Card = ({ repo }) => {
  return (
    <>
      <div className="card sm:w-80 md:w-80 lg:w-80 bg-base-100 shadow-lg mx-2 my-1 hover:shadow-xl transition-all duration-300" key={repo.id}>
        <div className="card-body">
          <h2 className="card-title overflow-hidden"><i className="fa-solid fa-book"></i>{repo.name}</h2>
          <div className=" flex justify-between items-center">
            <div className="w-[70%] flex justify-between">

              <p className=""><i className="fa-solid fa-circle fa-xs"></i> {repo.language}</p>
              <p><i className="fa-solid fa-star"></i> {repo.stargazers_count}</p>
              <p><i className="fa-solid fa-code-fork"></i> {repo.forks_count}</p>
            </div>
            <p className="text-sm">
              {repo.size}KB
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
