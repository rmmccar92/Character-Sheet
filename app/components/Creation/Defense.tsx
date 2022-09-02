import { Text } from "@mantine/core";
import type { FC } from "react";
import { FormField } from "~/components/form-field";
import type { ChangeEvent } from "react";

interface DefenseProps {
  formData: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: string) => any;
}

const Defense: FC<DefenseProps> = ({ formData, handleChange }) => {
  return (
    <>
      <FormField
        htmlFor="ac"
        value={formData.ac}
        type="text"
        onChange={(e) => handleChange(e, "ac")}
      />
      <FormField
        htmlFor="touch"
        value={formData.touch}
        type="text"
        onChange={(e) => handleChange(e, "touch")}
      />
      <FormField
        htmlFor="flatFooted"
        value={formData.flatFooted}
        type="text"
        onChange={(e) => handleChange(e, "flatFooted")}
      />
      <FormField
        htmlFor="hp"
        value={formData.hp}
        type="text"
        onChange={(e) => handleChange(e, "hp")}
      />
      <FormField
        htmlFor="dr"
        value={formData.dr}
        type="text"
        onChange={(e) => handleChange(e, "dr")}
      />
      <FormField
        htmlFor="sr"
        value={formData.sr}
        type="text"
        onChange={(e) => handleChange(e, "sr")}
      />
      <Text>
        <strong>Saving Throws</strong>
      </Text>
      <FormField
        htmlFor="fortitude"
        value={formData.fortitude}
        type="text"
        onChange={(e) => handleChange(e, "fortitude")}
      />
      <FormField
        htmlFor="will"
        value={formData.will}
        type="text"
        onChange={(e) => handleChange(e, "will")}
      />
      <FormField
        htmlFor="reflex"
        value={formData.reflex}
        type="text"
        onChange={(e) => handleChange(e, "reflex")}
      />
      <Text>
        <strong>Other</strong>
      </Text>
      <FormField
        htmlFor="resistances"
        value={formData.resistances}
        type="text"
        onChange={(e) => handleChange(e, "resistances")}
      />
      <FormField
        htmlFor="immunities"
        value={formData.immunities}
        type="text"
        onChange={(e) => handleChange(e, "immunities")}
      />
      <FormField
        htmlFor="cmd"
        value={formData.cmd}
        type="text"
        onChange={(e) => handleChange(e, "cmd")}
      />
    </>
  );
};
export default Defense;
