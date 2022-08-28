import type { FC } from "react";
import { FormField } from "~/components/form-field";

interface OffenseProps {}

const Offense: FC<OffenseProps> = ({}) => {
  return <FormField htmlFor="Offense" value={"offense"} type="text" />;
};
export default Offense;
