import type { FC } from "react";
import { FormField } from "~/components/form-field";

interface OffenseProps {}

const Offense: FC<OffenseProps> = ({}) => {
  return (
    <>
      <FormField htmlFor="intiative" value={"initiative"} type="text" />
      <FormField htmlFor="bab" value={"Base Attack Bonus"} type="text" />
      <FormField htmlFor="speed" value={"Speed"} type="text" />
      <FormField htmlFor="cmb" value={"Combat Maneuver Bonus"} type="text" />
    </>
  );
};
export default Offense;
