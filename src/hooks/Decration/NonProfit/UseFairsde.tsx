import React, { useEffect, useState } from "react";

const UseFairsde = (fair: any) => {
  const [fairs, setFairs] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.vercel.app/fairsExpos/${fair}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFairs(data));
  }, [fair]);
  return [fairs];
};

export default UseFairsde;
