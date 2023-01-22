import React, { useEffect, useState } from "react";
const UseNonProfitEvents = () => {
  const [nonPropit, setnonPropit] = useState([]);

  useEffect(() => {
    const url = "https://take-your-smile-server-side.vercel.app/nonprofit";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setnonPropit(data));
  }, []);
  return [nonPropit];
};

export default UseNonProfitEvents;
