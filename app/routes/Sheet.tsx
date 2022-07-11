import { Center, Container } from "@mantine/core";

export default function Sheet() {
  return (
    <Container size={840} className="box" style={{ border: `2px solid black` }}>
      <Center>
        <h1>General</h1>
      </Center>
      <Center>
        <h1>Abilities</h1>
      </Center>
      <Center>
        <h1>Defense</h1>
      </Center>
      <Center>
        <h1>Offense</h1>
      </Center>
      <Center>
        <h1>Skills</h1>
      </Center>
      <Center>
        <h1>Feats</h1>
      </Center>
      <Center>
        <h1>Items</h1>
      </Center>
      <Center>
        <h1>Spells</h1>
      </Center>
      <Center>
        <h1>Notes</h1>
      </Center>
    </Container>
  );
}
