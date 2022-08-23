import React, { useState } from "react";
import { Radio } from "@mantine/core";

interface props {
  skillName: string;
}

const RadioButton = ({ skillName }: props) => {
  const [toggle, setToggle] = useState(false);
  const handleRadioChange = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Radio
      value={skillName}
      checked={toggle}
      color="white"
      size="xs"
      style={{ marginRight: "1%" }}
      onClick={() => handleRadioChange()}
    />
  );
};
export default RadioButton;
