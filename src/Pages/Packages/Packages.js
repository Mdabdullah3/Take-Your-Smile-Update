import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Package.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const url = "https://take-your-smile.onrender.com/package";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const navigate = useNavigate();
  const handleClick = (item) => {
    if (item) {
      navigate(`/location/${item}`);
    }
    console.log(item);
  };
  return (
    <div>
      <div className="mt-20 grid w-9/12 mb-10 mx-auto grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((item) => (
          <div className="mx-auto even:bg-gradient-to-r from-[#001510] to-[#00bf8f] even:text-white odd:text-primary  text-center font-mono rounded-xl pt-8">
            <h1 className="text-2xl font-bold font-mono">{item.title}</h1>
            <h1 className="text-sm w-10/12 mx-auto font-mono py-3">
              {item.dis}
            </h1>
            <h1 className="text-5xl font-mono  pb-4">${item.price} </h1>
            <div className="ml-10 pff">
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3 ">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.eventTiming}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack4}
              </p>
              <p className="text-md font-mono  text-justify  flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack1}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack2}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.allPack3}
              </p>
              <p className="text-md font-mono text-justify  flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food}
              </p>
              <p className="text-md font-mono  text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food}
              </p>
              <p className="text-md font-mono text-justify flex items-center gap-2 pt-3">
                <span className="text-md">
                  <BsFillCheckCircleFill />
                </span>
                {item.food2}
              </p>
            </div>
            <div className="w-9/12 mx-auto py-8">
              <button
                onClick={() => handleClick(item._id)}
                className="btn  w-full text-black"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
