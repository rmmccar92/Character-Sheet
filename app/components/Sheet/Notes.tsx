import { Center, Container, Textarea } from "@mantine/core";

interface NotesProps {
  character: any;
}

export default function Notes({ character }: NotesProps) {
  return (
    <Center
      style={{
        border: "1px solid black",
        width: `100%`,
        padding: 0,
        margin: 0,
      }}
    >
      <Container style={{ width: "100%", marginBottom: "5%" }}>
        <h1>Notes</h1>
        <Textarea size="xl" />
      </Container>
    </Center>
  );
}
