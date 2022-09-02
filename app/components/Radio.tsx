import React, { useState } from "react";
import { Checkbox } from "@mantine/core";

interface props {
  skillName: string;
  value: string;
  formData: any;
}
// TODO: connect radio value to backend
const RadioButton = ({ skillName, value, formData }: props) => {
  // Radio button funcions
  const [toggle, setToggle] = useState(false);
  const handleRadioChange = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Checkbox
      value={value}
      checked={toggle}
      color="gray"
      radius="xl"
      size="xs"
      style={{ marginRight: "1%" }}
      onChange={() => handleRadioChange()}
    />
  );
};
export default RadioButton;
