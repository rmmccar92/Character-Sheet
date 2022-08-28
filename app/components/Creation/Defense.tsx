import { Text } from "@mantine/core";
import type { FC } from "react";
import { FormField } from "~/components/form-field";

interface DefenseProps {}

const Defense: FC<DefenseProps> = ({}) => {
  return (
    <>
      <FormField htmlFor="ac" value={"AC"} type="text" />
      <FormField htmlFor="touch" value={"Touch"} type="text" />
      <FormField htmlFor="flatFooted" value={"Flat-Footed"} type="text" />
      <FormField htmlFor="hp" value={"HP"} type="text" />
      <FormField htmlFor="dr" value={"dr"} type="text" />
      <FormField htmlFor="sr" value={"sr"} type="text" />
      <Text>
        <strong>Saving Throws</strong>
      </Text>
      <FormField htmlFor="fortitude" value={"fortitude"} type="text" />
      <FormField htmlFor="will" value={"Will"} type="text" />
      <FormField htmlFor="reflex" value={"Reflex"} type="text" />
      <Text>
        <strong>Other</strong>
      </Text>
      <FormField htmlFor="resistances" value={"Resistances"} type="text" />
      <FormField htmlFor="immunities" value={"Immunities"} type="text" />
      <FormField htmlFor="cmd" value={"Combat Maneuver Defense"} type="text" />
    </>
  );
};
export default Defense;
