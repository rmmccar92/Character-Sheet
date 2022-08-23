import React, { useState } from "react";
import { Radio } from "@mantine/core";

const RadioButton = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  const handleRadioChange = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Radio
      value={name}
      checked={toggle}
      color="white"
      size="xs"
      style={{ marginRight: "1%" }}
      onClick={() => handleRadioChange()}
    />
  );
};
export default RadioButton;
