import { Center, Container, TextInput, Paper, Text } from "@mantine/core";
// import characterData from "../../data/data.js";

interface Props {
  character: any;
}

export default function Abilities({ character }: Props) {
  return (
    <Center
      style={{
        border: "1px solid black",
        width: `100%`,
        padding: 0,
        margin: 0,
      }}
    >
      <Container style={{ padding: `1%` }}>
        <h1>Abilities</h1>
        <Container
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-evenly`,
          }}
        >
          <Container
            style={{
              display: `flex`,
              width: `28%`,
              alignItems: `center`,
              marginTop: `1%`,
            }}
          >
            <Paper
              shadow="md"
              radius="sm"
              withBorder
              style={{
                backgroundColor: `black`,
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
              <Text>STR</Text>
              <Text style={{ fontSize: `0.5em` }}>Strength</Text>
            </Paper>
            <TextInput
              description="Ability Score"
              defaultValue={character ? character.stats.strength.value : `0`}
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Ability Modifier"
              defaultValue={character ? character.stats.strength.modifier : `0`}
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Score"
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Modifier"
              size="xs"
              style={{ width: `20%` }}
            />
          </Container>
          <Container
            style={{
              display: `flex`,
              width: `28%`,
              alignItems: `center`,
              marginTop: `1%`,
            }}
          >
            <Paper
              shadow="md"
              radius="sm"
              withBorder
              style={{
                backgroundColor: `black`,
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
              <Text>DEX</Text>
              <Text style={{ fontSize: `0.5em` }}>Dexterity</Text>
            </Paper>
            <TextInput
              description="Ability Score"
              defaultValue={character ? character.stats.dexterity.value : `0`}
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Ability Modifier"
              defaultValue={
                character ? character.stats.dexterity.modifier : `0`
              }
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Score"
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Modifier"
              size="xs"
              style={{ width: `20%` }}
            />
          </Container>
          <Container
            style={{
              display: `flex`,
              width: `28%`,
              alignItems: `center`,
              marginTop: `1%`,
            }}
          >
            <Paper
              shadow="md"
              radius="sm"
              withBorder
              style={{
                backgroundColor: `black`,
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
              <Text>CON</Text>
              <Text style={{ fontSize: `0.5em` }}>Constitution</Text>
            </Paper>
            <TextInput
              description="Ability Score"
              defaultValue={
                character ? character.stats.constitution.value : `0`
              }
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Ability Modifier"
              defaultValue={
                character ? character.stats.constitution.modifier : `0`
              }
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Score"
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Modifier"
              size="xs"
              style={{ width: `20%` }}
            />
          </Container>
          <Container
            style={{
              display: `flex`,
              width: `28%`,
              alignItems: `center`,
              marginTop: `1%`,
            }}
          >
            <Paper
              shadow="md"
              radius="sm"
              withBorder
              style={{
                backgroundColor: `black`,
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
              <Text>INT</Text>
              <Text style={{ fontSize: `0.5em` }}>Intelligence</Text>
            </Paper>
            <TextInput
              description="Ability Score"
              defaultValue={
                character ? character.stats.intelligence.value : `0`
              }
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Ability Modifier"
              defaultValue={
                character ? character.stats.intelligence.modifier : `0`
              }
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Score"
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Modifier"
              size="xs"
              style={{ width: `20%` }}
            />
          </Container>
          <Container
            style={{
              display: `flex`,
              width: `28%`,
              alignItems: `center`,
              marginTop: `1%`,
            }}
          >
            <Paper
              shadow="md"
              radius="sm"
              withBorder
              style={{
                backgroundColor: `black`,
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
              <Text>WIS</Text>
              <Text style={{ fontSize: `0.5em` }}>Wisdom</Text>
            </Paper>
            <TextInput
              description="Ability Score"
              defaultValue={character ? character.stats.wisdom.value : `0`}
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Ability Modifier"
              defaultValue={character ? character.stats.wisdom.modifier : `0`}
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Score"
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Modifier"
              size="xs"
              style={{ width: `20%` }}
            />
          </Container>
          <Container
            style={{
              display: `flex`,
              width: `28%`,
              alignItems: `center`,
              marginTop: `1%`,
            }}
          >
            <Paper
              shadow="md"
              radius="sm"
              withBorder
              style={{
                backgroundColor: `black`,
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
              <Text>CHA</Text>
              <Text style={{ fontSize: `0.5em` }}>Charisma</Text>
            </Paper>
            <TextInput
              description="Ability Score"
              defaultValue={character ? character.stats.charisma.value : `0`}
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Ability Modifier"
              defaultValue={character ? character.stats.charisma.modifier : `0`}
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Score"
              size="xs"
              style={{ width: `20%` }}
            />
            <TextInput
              description="Temp Modifier"
              size="xs"
              style={{ width: `20%` }}
            />
          </Container>
        </Container>
      </Container>
    </Center>
  );
}
