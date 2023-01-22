import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import NavBar from "../../shared/NavBar/NavBar";
const Dashbord = () => {
  const [user] = useAuthState(auth)
  return (
    <div>
      <NavBar />
      <div className="grid lg:grid-cols-[200px_minmax(900px,_1fr)_50px]">
        <div className="rounded-2xl h-[590px] pb-16 mb-16 mx-auto ml-10 w-44 mt-36  bg-blue-900 ">
          <div className="pb-3 px-2 pt-3">
            <p className="font-mono mt-2 font-semibold text-center text-white">Admin</p>
          </div>
          <div className="pb-2 px-2 pt-3">
            <div className="hover:border-r-2 border-white px-2 my-2 mx-auto cursor-pointer">
              <NavLink to="/admin" className="flex items-center">
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <p className="text-md text-white pl-2 font-mono">Dasboard</p>
              </NavLink>
            </div>
          </div>
          <div className="pb-2 px-2 ">
            <div className="hover:border-r-2 border-white px-2 my-2 mx-auto flex cursor-pointer">
              <NavLink to="blogPost" className="flex items-center">

                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p className="text-md text-white pl-2 font-mono">Blog Post</p>
              </NavLink>
            </div>
          </div>
          <div className="pb-2 px-2 ">
            <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex cursor-pointer">
              <NavLink to="allbookings/bookings" className="flex items-center">
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-md text-white pl-2 font-mono">All Booking</p>
              </NavLink>
            </div>
          </div>

          <div className="pb-2 px-2 ">
            <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex cursor-pointer">
              <NavLink to="eventpost" className="flex items-center">
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
                <p className="text-md text-white pl-2 font-mono">Gallery Post</p>
              </NavLink>
            </div>
          </div>

          <div className="pb-2 px-2 ">
                <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex  cursor-pointer">
                    <NavLink to="teams/teamA" className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <p className="text-md text-white pl-2 font-mono">Teams</p>
                    </NavLink>
                </div>
            </div>
          <div className="pb-2 px-2 ">
            <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex cursor-pointer">
              <NavLink to="articlepost" className="flex items-center">
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <p className="text-md text-white pl-2 font-mono">Artical Post</p>
              </NavLink>
            </div>
          </div>
          <div className="pb-2 px-2 ">
            <div className=" hover:border-r-2 border-white px-2 my-2 mx-auto flex  cursor-pointer">
              <NavLink to="user" className="flex items-center">
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <p className="text-md text-white pl-2 font-mono">All User</p>
              </NavLink>
            </div>
          </div>
          <div className="mt-20">
            <img className="rounded-[50%] w-14 mx-auto" src={user?.photoURL} alt="" />
          </div>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;