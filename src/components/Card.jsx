import React from "react";

const Card = ({repo}) => {
  return (
    <>
      <div className="card sm:w-80 md:w-80 lg:w-80 bg-base-100 shadow-xl mx-2 my-1" key={repo.id}>
        <div className="card-body">
          <h2 className="card-title">{repo.name}</h2>
          <div className=" flex justify-between">
            <div className="w-[70%] flex justify-between">

            <p className=""><i class="fa-solid fa-circle fa-xs"></i> {repo.language}</p>
            <p><i className="fa-regular fa-star"></i> {repo.stargazers_count}</p>
            <p><i className="fa-solid fa-code-fork"></i> {repo.forks_count}</p>
            </div>
            {repo.size}KB
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
