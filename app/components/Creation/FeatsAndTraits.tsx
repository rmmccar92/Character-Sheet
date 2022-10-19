import { Container, Title } from "@mantine/core";
import type { FC, ChangeEvent, FormEvent } from "react";
import AddButton from "./AddButton";

interface FeatsAndTraitsProps {
  formData: any;
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    type: "feats" | "traits",
    field: string
  ) => any;
  handleAdd: (type: "feats" | "traits") => any;
}

const FeatsAndTraits: FC<FeatsAndTraitsProps> = ({
  handleChange,
  formData,
  handleAdd,
}) => {
  return (
    <Container>
      <Title>Feats {"&"} Traits</Title>
      <AddButton
        handleChange={handleChange}
        formData={formData}
        type={"feats"}
        handleAdd={handleAdd}
      />
      <AddButton
        handleChange={handleChange}
        formData={formData}
        type={"traits"}
        handleAdd={handleAdd}
      />
    </Container>
  );
};
export default FeatsAndTraits;
