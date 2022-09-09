import React, { useState } from "react";
import type { FC, Dispatch, SetStateAction, ChangeEvent } from "react";
import { Checkbox } from "@mantine/core";

interface props {
  // setTrained: Dispatch<SetStateAction<boolean>>;
  skillName: string;
  value: string;
  handleRadioSkillChange: (
    e: ChangeEvent<HTMLInputElement>,
    skill: string
  ) => any;
}
// TODO: connect radio value to backend
const RadioButton: FC<props> = ({
  // setTrained,
  skillName,
  // value,
  handleRadioSkillChange,
}: props) => {
  // Radio button funcions
  const [toggle, setToggle] = useState(false);
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("SKILL", skillName, "trained:", e.target.checked);
    setToggle((prev) => !prev);
    handleRadioSkillChange(e, skillName);
  };
  return (
    <Checkbox
      // value={value}
      checked={toggle}
      color="gray"
      radius="xl"
      size="xs"
      style={{ marginRight: "1%" }}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleRadioChange(e)}
    />
  );
};
export default RadioButton;
