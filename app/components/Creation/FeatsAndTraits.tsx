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
  handleSubmit: (e: FormEvent<HTMLFormElement>) => any;
}

const FeatsAndTraits: FC<FeatsAndTraitsProps> = ({
  handleChange,
  formData,
}) => {
  return (
    <Container>
      <Title>Feats {"&"} Traits</Title>
      <AddButton
        handleChange={handleChange}
        formData={formData}
        type={"feat"}
      />
      <AddButton
        handleChange={handleChange}
        formData={formData}
        type={"trait"}
      />
    </Container>
  );
};
export default FeatsAndTraits;
