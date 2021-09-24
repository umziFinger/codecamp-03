import axios from "axios";
import { useEffect, useState } from "react";

export default function WeatherPage() {
  const [aaa, setAaa] = useState("");

  useEffect(() => {
    async function weather() {
      const aaa = await axios.get(
        "https://www.metaweather.com/api/location/search/?query=london"
      );
      setAaa(aaa.data.query);
    }
    weather();
  }, []);

  return (
    <>
      <div>{aaa}</div>
    </>
  );
}
