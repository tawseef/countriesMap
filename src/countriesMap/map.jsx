import React, { useEffect, useState } from "react";
import axios from "axios";
import "./map.css";

export default function map() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
// eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="flag">
      {data.map((item) => (
        <div key={item.ccn3} className="cardx" style={{ border: "1px solid" }}>
          <img
            className="image"
            src={item.flags.svg}
            alt={item.flags.alt}
            height={"100px"}
            width={"100px"}
          />
          <p>{item.name.common}</p>
        </div>
      ))}
    </div>
  );
}
