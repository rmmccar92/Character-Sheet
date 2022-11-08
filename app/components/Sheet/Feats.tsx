import {
  Center,
  Container,
  Paper,
  TextInput,
  Text,
  Button,
} from "@mantine/core";

interface FeatsProps {
  character: any;
}

export default function Defense({ character }: FeatsProps) {
  return (
    <Center
      style={{
        border: "1px solid black",
        width: `100%`,
        padding: 0,
        margin: 0,
      }}
    >
      <Container style={{ width: "100%" }}>
        <h1>Feats & Special Abilities</h1>

        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
          <Paper
            shadow="md"
            radius="sm"
            withBorder
            style={{
              backgroundColor: `black`,
              padding: `1%`,
              color: `white`,
              height: `95%`,
              alignSelf: `flex-end`,
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `center`,
              alignItems: `center`,
              marginRight: `1%`,
            }}
          >
            <Text>Feats</Text>
          </Paper>
          <Button style={{ marginRight: "1%" }}>Add Feat</Button>
          <TextInput />
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
          <Paper
            shadow="md"
            radius="sm"
            withBorder
            style={{
              backgroundColor: `black`,
              padding: `1%`,
              color: `white`,
              height: `95%`,
              alignSelf: `flex-end`,
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `center`,
              alignItems: `center`,
              marginRight: `1%`,
            }}
          >
            <Text>Special Abilities</Text>
          </Paper>
          <Button style={{ marginRight: "1%" }}>Add Special Ability</Button>
          <TextInput />
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
          <Paper
            shadow="md"
            radius="sm"
            withBorder
            style={{
              backgroundColor: `black`,
              padding: `1%`,
              color: `white`,
              height: `95%`,
              alignSelf: `flex-end`,
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `center`,
              alignItems: `center`,
              marginRight: `1%`,
            }}
          >
            <Text>Traits</Text>
          </Paper>
          <Button style={{ marginRight: "1%" }}>Add Trait</Button>
          <TextInput />
        </Container>
      </Container>
    </Center>
  );
}
