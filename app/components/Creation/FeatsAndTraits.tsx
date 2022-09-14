import { Container, Text } from "@mantine/core";
import type { FC, ChangeEvent, FormEvent } from "react";
import AddButton from "./AddButton";

interface FeatsAndTraitsProps {
  formData: any;
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    type: string,
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
