import React, { useState } from "react";
import { Checkbox } from "@mantine/core";

interface props {
  skillName: string;
  value: string;
  formData: any;
  setFormData: any;
}
// TODO: connect radio value to backend
const RadioButton = ({ skillName, value, formData, setFormData }: props) => {
  // Radio button funcions
  const [toggle, setToggle] = useState(false);
  const handleRadioChange = () => {
    console.log(toggle);
    setToggle((prev) => !prev);
  };
  return (
    <Checkbox
      value={value}
      checked={toggle}
      color="dark"
      radius="xl"
      size="xs"
      style={{ marginRight: "1%" }}
      onChange={() => handleRadioChange()}
    />
  );
};
export default RadioButton;
