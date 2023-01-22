import React, { useEffect, useState } from "react";

const UseWelcomeDe = (weh: any) => {
  const [WeHome, setWehome] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.vercel.app/home/${weh}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWehome(data));
  }, [weh]);
  return [WeHome];
};

export default UseWelcomeDe;
