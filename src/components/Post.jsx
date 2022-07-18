import { SettingsApplications } from "@mui/icons-material";
import React from "react";
import icons from "../icons";
import StyledBadge from "./AvatarOnline";
const Post = () => {
  return (
    <div className="w-full bg-[#242526] rounded-lg" >
      <div className=" flex items-center justify-between px-3 p-2" >
        <aside className="flex items-center gap-3" >
          <icons.Avatar>T</icons.Avatar>
          <span>
            <h3 className="font-bold text-gray-300" >Akinola Omolola</h3>
            <p className="text-sm text-gray-300" >July 16 at 10:09 PM</p>
          </span>
        </aside>
        <icons.MoreHorizIcon />
      </div>
        <p className="px-3 p-1 text-gray-200" >
          Akinola Omolola and Martin Barth at the World Council meeting held at
          Denmark
        </p>
      <div className="w-full max-h-[400px] bg-green" >
        <img src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/294153792_580939926730865_8806804093177465640_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeElSwr2eX8DuQxGVacUfMOPJ6wxJ1D898knrDEnUPz3yV-dYYEamvlDRWrP-pKHne-EaJYpTDFs4Vo1wz-gf6gr&_nc_ohc=77_XR0QaogYAX-XSO--&tn=h56OGpVupBUnYkjL&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AT_ERjHPhbPIMuXqnvAx2Zw0lAa5e4vGhj1FNB_3gwml1g&oe=62D8A41E"  className="object-cover w-full max-h-[400px]" alt="post-img" />
      </div>
      <section className="w-[96%] mx-auto">
        <span >
          <p>27k</p>
        </span>
        <div className="grid grid-cols-3  border-t border-b border-gray-500 font-medium text-gray-300 my-1" >
          <button className="flex text-blue-400 items-center justify-center gap-2 p-2 hover:bg-[#3A3B3C] rounded-md">
            <icons.AiFillLike/> <p>Like</p>
          </button>
          <button className="flex items-center justify-center gap-2 p-2 hover:bg-[#3A3B3C] rounded-md">
            <icons.FaRegCommentAlt/> <p>Comment</p>
          </button>
          <button className="flex items-center justify-center gap-2 p-2 hover:bg-[#3A3B3C] rounded-md">
            <icons.FaRegCommentAlt/> <p>Share</p>
          </button>
        </div>
        <div className="flex flex-col my-1" >
          <p className='flex gap-2 items-center' >
            <StyledBadge />
            <span className="bg-[#3A3B3C] p-2 rounded-xl" >
              <p className='text-gray-300 font-medium text-base' >Timothy Ajani</p>
              <p className="text-[13px]" >Good morning</p>
            </span>
          </p>
        </div>
        <div className="flex gap-3 pb-3 my-1 mt-2" >
          <StyledBadge /> 
          <aside className="text-base bg-[#3A3B3C] outline-none border-none rounded-md px-1 flex-1 flex items-center">

          <input type="text" className="text-base bg-[#3A3B3C] outline-none border-none rounded-md px-3 flex-1" placeholder="Write a comment" />
          <span><icons.InsertEmoticonOutlinedIcon style={{color:"#9EA1A5"}} /></span>
          <span><icons.GifOutlinedIcon style={{color:"#9EA1A5"}} /></span>
          <span><icons.CameraEnhanceOutlinedIcon style={{color:"#9EA1A5"}} /></span>
          </aside>
        </div>
        
      </section>
    </div>
  );
};

export default Post;
