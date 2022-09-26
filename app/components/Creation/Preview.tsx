import type { FC } from "react";
import { Container, Text } from "@mantine/core";
interface PreviewProps {}

const Preview: FC<PreviewProps> = () => {
  return (
    <Container style={{ width: "48%", border: "1px solid yellow" }}>
      <Container
        style={{
          background: "white",
          width: "80%",
          height: "30em",
          textAlign: "center",
        }}
      >
        <Text>Character Preview</Text>
      </Container>
    </Container>
  );
};
export default Preview;
