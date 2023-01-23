import React, { useEffect, useState } from "react";
const UseAnneyDec = (anny: any) => {
  const [annerversary, setAnnerversary] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile.onrender.com/anniversary/${anny}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnnerversary(data));
  }, [anny]);
  return [annerversary];
};
export default UseAnneyDec;
