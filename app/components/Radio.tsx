import React, { useState } from "react";
import { Radio } from "@mantine/core";

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
    setToggle((prev) => !prev);
    console.log(formData.skills);
    // setFormData({ ...formData, skills[skillName].trained: !toggle });
  };
  return (
    <Radio
      value={value}
      checked={toggle}
      color="white"
      size="xs"
      style={{ marginRight: "1%" }}
      onClick={() => handleRadioChange()}
    />
  );
};
export default RadioButton;
