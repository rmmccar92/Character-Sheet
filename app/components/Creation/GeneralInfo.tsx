import type { FC } from "react";
import { FormField } from "~/components/form-field";
import { Title, Center } from "@mantine/core";
import type { ChangeEvent } from "react";
import MySelect from "./MySelect";

interface GeneralInfoProps {
  formData: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: string) => any;
}

const GeneralInfo: FC<GeneralInfoProps> = ({ formData, handleChange }) => {
  return (
    <>
      <Title>General Info</Title>
      <MySelect onChange={(e) => handleChange(e, "alignment")} />
      <FormField
        htmlFor="deity"
        label="Deity"
        value={formData.deity}
        type="text"
        onChange={(e) => handleChange(e, "deity")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="homeland"
        label="Homeland"
        value={formData.homeland}
        type="text"
        onChange={(e) => handleChange(e, "homeland")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="race"
        label="Race"
        value={formData.race}
        type="text"
        onChange={(e) => handleChange(e, "race")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="size"
        label="Size"
        value={formData.size}
        type="text"
        onChange={(e) => handleChange(e, "size")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="gender"
        label="Gender"
        value={formData.gender}
        type="text"
        onChange={(e) => handleChange(e, "gender")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="characterAge"
        label="Age"
        value={formData.characterAge}
        type="text"
        onChange={(e) => handleChange(e, "characterAge")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="characterHeight"
        label="Height"
        value={formData.characterHeight}
        type="text"
        onChange={(e) => handleChange(e, "characterHeight")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="weight"
        label="Weight"
        value={formData.weight}
        type="text"
        onChange={(e) => handleChange(e, "weight")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="hairColor"
        label="Hair Color"
        value={formData.hairColor}
        type="text"
        onChange={(e) => handleChange(e, "hairColor")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="eyeColor"
        label="Eye Color"
        value={formData.eyeColor}
        type="text"
        onChange={(e) => handleChange(e, "eyeColor")}
        style={{ width: "100%" }}
      />
      <FormField
        htmlFor="characterClass"
        label="Class"
        value={formData.characterClass}
        type="text"
        onChange={(e) => handleChange(e, "characterClass")}
        style={{ width: "100%" }}
      />
      {/* </Center> */}
    </>
  );
};
export default GeneralInfo;
