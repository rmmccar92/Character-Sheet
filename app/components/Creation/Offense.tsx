import type { FC } from "react";
import { FormField } from "~/components/form-field";
import type { ChangeEvent } from "react";
import { Title } from "@mantine/core";

interface OffenseProps {
  formData: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: string) => any;
}

const Offense: FC<OffenseProps> = ({ formData, handleChange }) => {
  return (
    <>
      <Title>Offensive Stats</Title>
      <FormField
        htmlFor="initiative"
        label="Initiative"
        value={formData.initiative}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "initiative")}
      />
      <FormField
        htmlFor="bab"
        label="Base Attack Bonus"
        value={formData.bab}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "bab")}
      />
      <FormField
        htmlFor="speed"
        label="Speed"
        value={formData.speed}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "speed")}
      />
      <FormField
        htmlFor="cmb"
        label="Combat Maneuver Bonus"
        value={formData.cmb}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "cmb")}
      />
    </>
  );
};
export default Offense;
