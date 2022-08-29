import type { FC } from "react";
import { FormField } from "~/components/form-field";
import { Title } from "@mantine/core";
import type { ChangeEvent } from "react";
import { useLoaderData } from "@remix-run/react";

interface GeneralInfoProps {
  formData: any;
  setFormData: any;
}

const GeneralInfo: FC<GeneralInfoProps> = ({ formData, setFormData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData((form: any) => ({
      ...form,
      [field]: e.target.value,
    }));
  };
  console.log(formData);
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
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "characterName")}
      />
      <FormField
        htmlFor="alignment"
        label="Alignment"
        value={formData.alignment}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "alignment")}
      />
      <FormField
        htmlFor="deity"
        label="Deity"
        value={formData.deity}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "deity")}
      />
      <FormField
        htmlFor="homeland"
        label="Homeland"
        value={formData.homeland}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "homeland")}
      />
      <FormField
        htmlFor="race"
        label="Race"
        value={formData.race}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "race")}
      />
      <FormField
        htmlFor="size"
        label="Size"
        value={formData.size}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "size")}
      />
      <FormField
        htmlFor="gender"
        label="Gender"
        value={formData.gender}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "gender")}
      />
      <FormField
        htmlFor="characterAge"
        label="Age"
        value={formData.characterAge}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "characterAge")}
      />
      <FormField
        htmlFor="characterHeight"
        label="Height"
        value={formData.characterHeight}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "characterHeight")}
      />
      <FormField
        htmlFor="weight"
        label="Weight"
        value={formData.weight}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "weight")}
      />
      <FormField
        htmlFor="hairColor"
        label="Hair Color"
        value={formData.hairColor}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "hairColor")}
      />
      <FormField
        htmlFor="eyeColor"
        label="Eye Color"
        value={formData.eyeColor}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "eyeColor")}
      />
      <FormField
        htmlFor="characterClass"
        label="Class"
        value={formData.characterClass}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "characterClass")}
      />
    </>
  );
};
export default GeneralInfo;
