import { Container, Text } from "@mantine/core";
import type { FC } from "react";
import AddButton from "./AddButton";

interface FeatsAndTraitsProps {}

const FeatsAndTraits: FC<FeatsAndTraitsProps> = ({}) => {
  return (
    <Container>
      <AddButton type={"feat"} />
      <AddButton type={"trait"} />
    </Container>
  );
};
export default FeatsAndTraits;
