import React from "react";
import Avatar from "@mui/material/Avatar";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    ["/", "https://rb.gy/q4fpyj", "Friends"],
    ["/", "https://rb.gy/nmozgu", "Watch"],
    ["/", "https://rb.gy/sjoo6b", "Groups"],
    ["/", "https://rb.gy/oazqf9", "Memories"],
    ["/", "https://rb.gy/ehqq2b", "Saved"],
    ["/", "https://rb.gy/sbyhwy", "Pages"],
    ["/", "https://rb.gy/jasmk5", "Events"],
    ["/", "https://rb.gy/cux6ko", "Most Recent"],
    ["/", "https://rb.gy/mselnq", "Favourites"],
  ];
  return (
    <div className="w-1/4 h-full hidden xl:grid" >
    <Link to='/profile' >
        <div className="navlink"><Avatar sx={{width:30,height:30}} >T</Avatar> <p>Timothy Ajani Jr</p> </div>
    </Link>
   
      {links.map(([url, image, title], id) => (
        <Link to={url} key={id} className="" >
          <div key={title} className="navlink" >
            {" "}
            <img src={image} alt={title} className="w-[28px] h-[28px]" /> <p>{title}</p>
          </div>
        </Link>
      ))}

      <Link to='/' >
        <div className="navlink"><ExpandCircleDownIcon/> <p>See more</p> </div>
    </Link>
    </div>
    
  );
};

export default Sidebar;
