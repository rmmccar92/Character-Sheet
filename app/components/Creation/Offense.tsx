import type { FC } from "react";
import { FormField } from "~/components/form-field";
import type { ChangeEvent } from "react";

interface OffenseProps {
  formData: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: string) => any;
}

const Offense: FC<OffenseProps> = ({ formData, handleChange }) => {
  return (
    <>
      <FormField
        htmlFor="initiative"
        value={formData.initiative}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "initiative")}
      />
      <FormField
        htmlFor="bab"
        value={formData.bab}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "bab")}
      />
      <FormField
        htmlFor="speed"
        value={formData.speed}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "speed")}
      />
      <FormField
        htmlFor="cmb"
        value={formData.cmb}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "cmb")}
      />
    </>
  );
};
export default Offense;
