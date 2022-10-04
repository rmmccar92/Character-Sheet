import type { FC } from "react";
import { FormField } from "~/components/form-field";
import { Title } from "@mantine/core";
import type { ChangeEvent } from "react";
import MySelect from "./MySelect";

interface GeneralInfoProps {
  formData: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: string) => any;
}

const GeneralInfo: FC<GeneralInfoProps> = ({ formData, handleChange }) => {
  return (
    <>
      <Title color="white" align="center">
        General Info
      </Title>
      <FormField
        htmlFor="characterName"
        label="Character Name"
        value={formData.characterName}
        type="text"
        onChange={(e) => handleChange(e, "characterName")}
      />
      {/* <FormField
        htmlFor="alignment"
        label="Alignment"
        value={formData.alignment}
        type="text"
        onChange={(e) => handleChange(e, "alignment")}
      /> */}
      <MySelect />
      <FormField
        htmlFor="deity"
        label="Deity"
        value={formData.deity}
        type="text"
        onChange={(e) => handleChange(e, "deity")}
      />
      <FormField
        htmlFor="homeland"
        label="Homeland"
        value={formData.homeland}
        type="text"
        onChange={(e) => handleChange(e, "homeland")}
      />
      <FormField
        htmlFor="race"
        label="Race"
        value={formData.race}
        type="text"
        onChange={(e) => handleChange(e, "race")}
      />
      <FormField
        htmlFor="size"
        label="Size"
        value={formData.size}
        type="text"
        onChange={(e) => handleChange(e, "size")}
      />
      <FormField
        htmlFor="gender"
        label="Gender"
        value={formData.gender}
        type="text"
        onChange={(e) => handleChange(e, "gender")}
      />
      <FormField
        htmlFor="characterAge"
        label="Age"
        value={formData.characterAge}
        type="text"
        onChange={(e) => handleChange(e, "characterAge")}
      />
      <FormField
        htmlFor="characterHeight"
        label="Height"
        value={formData.characterHeight}
        type="text"
        onChange={(e) => handleChange(e, "characterHeight")}
      />
      <FormField
        htmlFor="weight"
        label="Weight"
        value={formData.weight}
        type="text"
        onChange={(e) => handleChange(e, "weight")}
      />
      <FormField
        htmlFor="hairColor"
        label="Hair Color"
        value={formData.hairColor}
        type="text"
        onChange={(e) => handleChange(e, "hairColor")}
      />
      <FormField
        htmlFor="eyeColor"
        label="Eye Color"
        value={formData.eyeColor}
        type="text"
        onChange={(e) => handleChange(e, "eyeColor")}
      />
      <FormField
        htmlFor="characterClass"
        label="Class"
        value={formData.characterClass}
        type="text"
        onChange={(e) => handleChange(e, "characterClass")}
      />
    </>
  );
};
export default GeneralInfo;
