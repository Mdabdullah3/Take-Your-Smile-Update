import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import UsePackage from "../../../hooks/UsePackage";
import "./Banner.css";
import { ImSearch } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
const Fade = require("react-reveal/Fade");
const Location = () => {
  const [address, setAddress] = useState([]);
  const [filter, setFilter] = useState("");
  const { id } = useParams();
  const [packag] = UsePackage(id);
  const navigate = useNavigate();
  useEffect(() => {
    const url = "https://take-your-smile-server-side.vercel.app/address";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, []);

  const handleClick = (item) => {
    if (item) {
      navigate(`/decretion/${item}`);
    }
  };

  const searchEvent = (event) => {
    setFilter(event.target.value);
  };

  let dataSeacrch = address.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <>
      <div className="z-10">
        <div className="extra relative">
          <div>
            <img
              src="https://weddingdir.net/wp-content/uploads/2021/07/listing-location-ahmedabad-banner.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-16 left-40 text-white">
            <h1 className="font-mono text-3xl flex">
              <span
                onClick={() => navigate(-1)}
                className=" cursor-pointer flex items-center gap-2 font-mono text-yellow-400 mr-2"
              >
                <AiFillHome /> Home
              </span>
              /Set Your Location
            </h1>
          </div>
        </div>
        <div className=" rounded-lg shadow-lg relative overflow-hidden w-6/12 mx-auto">
          <input
            type="text"
            className=" border-none px-10 text-xl font-mono input py-10 w-full bg-primary-content text-secondary"
            value={filter}
            placeholder="Search Your Location"
            onChange={searchEvent.bind(this)}
          />
          <h1 className="absolute bottom-6 right-12 text-3xl text-secondary">
            <ImSearch />
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-8 mt-28">
        {dataSeacrch.slice(0, 6).map((item) => (
          <Fade bottom>
            <div
              onClick={() => handleClick(item._id)}
              className="relative rounded-xl cursor-pointer"
            >
              <img className="w-96 h-64" src={item.Locationimg} alt="" />
              <div className="absolute bottom-0 text-white text-md py-3 w-full pl-7 bg-[#01010190] flex items-center justify-between">
                <div>
                  <h1 className="font-mono">{item.Location}</h1>
                  <h1 className="font-mono">{item.center}</h1>
                </div>
                <div>
                  <button className="text-3xl mr-7">
                    <HiOutlineLocationMarker />
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};

export default Location;
