import { Text, Title } from "@mantine/core";
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
      <Title>Defensive Stats</Title>
      <FormField
        htmlFor="ac"
        label="Armor Class"
        value={formData.ac}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "ac")}
      />
      <FormField
        htmlFor="touch"
        label="Touch"
        value={formData.touch}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "touch")}
      />
      <FormField
        htmlFor="flatFooted"
        label="Flat-Footed"
        value={formData.flatFooted}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "flatFooted")}
      />
      <FormField
        htmlFor="hp"
        label="HP"
        value={formData.hp}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "hp")}
      />
      <FormField
        htmlFor="dr"
        label="Damage Reduction"
        value={formData.dr}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "dr")}
      />
      <FormField
        htmlFor="sr"
        label="Spell Resistance"
        value={formData.sr}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "sr")}
      />
      <Text>
        <strong>Saving Throws</strong>
      </Text>
      <FormField
        htmlFor="fortitude"
        label="Fortitude"
        value={formData.fortitude}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "fortitude")}
      />
      <FormField
        htmlFor="will"
        label="Will"
        value={formData.will}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "will")}
      />
      <FormField
        htmlFor="reflex"
        label="Reflex"
        value={formData.reflex}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "reflex")}
      />
      <Text>
        <strong>Other</strong>
      </Text>
      <FormField
        htmlFor="resistances"
        label="Resistances"
        value={formData.resistances}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "resistances")}
      />
      <FormField
        htmlFor="immunities"
        label="Immunities"
        value={formData.immunities}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "immunities")}
      />
      <FormField
        htmlFor="cmd"
        label="Combat Maneuver Defense"
        value={formData.cmd}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "cmd")}
      />
    </>
  );
};
export default Defense;
