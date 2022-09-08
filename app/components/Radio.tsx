import React, { useState } from "react";
import type { FC, Dispatch, SetStateAction } from "react";
import { Checkbox } from "@mantine/core";

interface props {
  setTrained: Dispatch<SetStateAction<boolean>>;
  skillName: string;
  value: string;
  handleRadioSkillChange: (skill: string) => any;
}
// TODO: connect radio value to backend
const RadioButton: FC<props> = ({
  setTrained,
  skillName,
  value,
  handleRadioSkillChange,
}: props) => {
  // Radio button funcions
  const [toggle, setToggle] = useState(false);
  const handleRadioChange = () => {
    console.log("SKILL", skillName);
    setToggle((prev) => !prev);
    handleRadioSkillChange(skillName);
  };
  return (
    <Checkbox
      // value={value}
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
