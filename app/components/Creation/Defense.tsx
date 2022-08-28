import type { FC } from "react";
import { FormField } from "~/components/form-field";

interface DefenseProps {}

const Defense: FC<DefenseProps> = ({}) => {
  return <FormField htmlFor="Defense" value={"defense"} type="text" />;
};
export default Defense;
