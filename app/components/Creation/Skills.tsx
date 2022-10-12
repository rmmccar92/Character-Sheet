import type { FC, ChangeEvent } from "react";
import skillsData from "~/utils/data.js";
import { FormField } from "~/components/form-field";
import { Title, Container, Text } from "@mantine/core";
import RadioButton from "~/components/Radio";

interface SkillsProps {
  formData: any;
  handleSkillChange: (e: ChangeEvent<HTMLInputElement>, field: string) => any;
  handleRadioSkillChange: (
    e: ChangeEvent<HTMLInputElement>,
    skill: string
  ) => any;
}

const Skills: FC<SkillsProps> = ({
  formData,
  handleSkillChange,
  handleRadioSkillChange,
}) => {
  return (
    <>
      <Title className="skills-title">Skills</Title>
      <div className="skills-container">
        {skillsData.map((skill) => (
          <Container
            key={skill.name}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <RadioButton
              value={formData.skills?.[skill.name]?.trained}
              skillName={skill.name}
              handleRadioSkillChange={handleRadioSkillChange}
            />
            <Text>{skill.label}</Text>
            <FormField
              htmlFor={skill.name}
              value={formData.skills?.[skill.name]?.ranks}
              type="string"
              label=""
              style={{
                width: "10%",
                marginLeft: "1%",
                justifySelf: "flex-end",
              }}
              onChange={(e) => {
                handleSkillChange(e, `${skill.name}`);
              }}
            />
          </Container>
        ))}
      </div>
    </>
  );
};
export default Skills;
