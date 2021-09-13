import { Calendar } from "antd";
import { useState } from "react";

export default function Calender() {
  const [value, setValue] = useState("");

  function onPanelChange(value, mode) {
    setValue(value.format("YYYY-MM-DD"));
    console.log(value.format("YYYY-MM-DD"), mode);
  }

  return (
    <>
      <Calendar onPanelChange={onPanelChange} />
      <div>{value}</div>
    </>
  );
}
