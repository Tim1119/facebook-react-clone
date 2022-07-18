import icons from "../icons";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center  justify-between w-full h-[60px] bg-[#242526] p-4 text-[#B0B3B8]">
      <div className="flex items-center gap-2 xl:gap-4">
        <img
          src="https://tinyurl.com/42kn7kfe"
          className="w-[40px] h-[40px]"
          alt="facevook-logo"
        />
        <div className="flex bg-[#3A3B3C] rounded-full xl:rounded-xl px-0 xl:px-2">
          <icons.IconButton>
            <icons.SearchIcon className="nav__icon-right text-[#B0B3B8]" />
          </icons.IconButton>
          <input type="text" placeholder="Search Facebook" className="outline-none bg-[#3A3B3C] hidden xl:inline-flex" />
        </div>
      </div>
      <section className="hidden grid-cols-4 gap-1  sm:grid flex-[0.5] md:flex-[0.5] h-[inherit]">
        <div className="nav__icons-middle bg-[#242526] border-b-4 border-blue-500 hover:rounded-none hover:bg-none" >
          <icons.HomeIcon sx={{ fontSize: 28}} className="text-blue-500" />
        </div>
        <div className="nav__icons-middle" >
          <icons.OndemandVideoIcon sx={{ fontSize: 28 }} />
        </div>
        <div className="nav__icons-middle" >
          <aside className="border-2 rounded-full border-[#B0B3B8] ">
            <icons.GroupsIcon sx={{ fontSize: 25 }} />
          </aside>
        </div>
        <div className="nav__icons-middle" >
          <icons.DashboardIcon sx={{ fontSize: 28 }} />
        </div>
      </section>
      <section className="flex items-center gap-3">
        <div className="nav__right">
          <icons.AppsIcon className="nav__icon-right" />
        </div>
        <div className="nav__right relative">
          <p className="notification">2+</p>
          <icons.OfflineBoltIcon className="nav__icon-right" />
        </div>
        <div className="nav__right relative">
          <p className="notification">34+</p>
          <icons.NotificationsIcon className="nav__icon-right" />
        </div>
        <div className="cursor-pointer">
          <icons.Avatar sx={{ width: 30, height: 30 }} />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
