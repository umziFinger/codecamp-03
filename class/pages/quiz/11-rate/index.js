import { Rate } from "antd";
import { useState } from "react";

const desc = ["1", "2", "3", "4", "5"];

export default function StarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </span>
      <div>{value}점입니다</div>
    </>
  );
}
