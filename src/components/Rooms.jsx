import React, { useEffect, useState } from "react";
import StyledBadge from "./AvatarOnline";
import icons from "../icons";
import { getRoomUsers } from "../functions";
import { Component } from "react";

const Rooms = () => {
  const [roomUsers, setRoomUsers] = useState([]);
  useEffect(() => {
    setRoomUsers(getRoomUsers());
  }, []);
 
  return (
    <div className=" rounded-xl bg-[#242522] sm:w-[70%] mx-auto px-4 my-3 flex items-center justify-around w-full">
      <div className="w-[300px] p-2 rounded-xl h-fit flex items-center text-[#5093ed] border-2 border-[#5093ed]  font-bold cursor-pointer">
        <icons.VideoCallIcon style={{ fill: "#A54DB4" }} />
        <span>Create room</span>
      </div>
     
      <div className="flex items-center gap-1 overflow-x-scroll m-3 room__scrollbar " >
      {roomUsers?.map((user,id) => (
        <div className='w-fit' key={id} ><StyledBadge user={user} /></div>
      ))}
      </div>

    

     
     </div> 
  );
};

export default Rooms;
