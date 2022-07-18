import React, { useEffect, useState } from "react";
import Ad from "./Ad";
import icons from "../icons";
import StyledBadge from "./AvatarOnline";
import { getRandomUsers } from "../functions";

const RightSidebar = () => {
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    setRandomUsers(getRandomUsers);
  }, []);

  console.log(randomUsers);

  const advertisements = [
    ["https://tinyurl.com/2p8xhv4v", "2022 Scholarships Open", "baboonbum.com"],
    [
      "https://tinyurl.com/ch7nf9pm",
      "Atlantic International University",
      "aiu.edu",
    ],
  ];
  return (
    <div className="w-1/3 hidden xl:flex flex-col p-2">
      <section className="flex flex-col">
        <h1 className="font-bold text-gray-300">Sponsored</h1>
        {advertisements.map(([imageURL, title, link]) => (
          <Ad key={title} imageURL={imageURL} title={title} link={link} />
        ))}
      </section>
      <section className="my-2" >
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-gray-300">Contact</h1>
          <div className="flex items-center gap-2" >
            <icons.CameraEnhanceOutlinedIcon />
            <icons.SearchIcon />
            <icons.MoreHorizIcon />
          </div>
        </div>
        <div className="flex gap-2 my-3 flex-col">
          {randomUsers?.map((user,id) => (
          
          <span key={id} className="flex items-center gap-1" >
            <StyledBadge user={user} ></StyledBadge> <p className="text-gray-300">{user.name}</p>
          </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RightSidebar;
