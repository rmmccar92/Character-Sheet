import type { FC } from "react";
import { Container, Text } from "@mantine/core";
interface PreviewProps {}

const Preview: FC<PreviewProps> = () => {
  return (
    <Container
      style={{
        background: "white",
        width: "50%",
        height: "25em",
        textAlign: "center",
      }}
    >
      <Text>Character Preview</Text>
    </Container>
  );
};
export default Preview;
