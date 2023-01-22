import React, { useEffect, useState } from "react";

const UseSocialEvents = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    const url = "https://take-your-smile-server-side.vercel.app/social";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSocial(data));
  }, []);
  return [social];
};

export default UseSocialEvents;
