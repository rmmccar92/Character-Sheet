import {
  Center,
  Container,
  TextInput,
  Textarea,
  Paper,
  Text,
} from "@mantine/core";

export default function Sheet() {
  return (
    <Container
      size={840}
      className="box"
      style={{
        border: `2px solid black`,
        padding: 0,
        textAlign: `center`,
        backgroundImage: `url(https://tierrasuratherzog.com/wp-content/uploads/2019/05/TS-Wedding-Paper-BG.jpg)`,
      }}
    >
      <Center
        style={{
          border: "1px solid black",
          width: `100%`,
          padding: 0,
          margin: 0,
        }}
      >
        <Container style={{ padding: `1%` }}>
          <h1>General</h1>
          <Container
            style={{
              padding: 0,
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-evenly`,
            }}
          >
            <TextInput
              placeholder="Name"
              label="Name"
              style={{ width: `32%` }}
            />
            <TextInput
              placeholder="Alignment"
              label="Alignment"
              style={{ width: `32%` }}
            />
            <TextInput
              placeholder="Player"
              label="Player"
              style={{ width: `32%` }}
            />
            <TextInput
              placeholder="Class"
              label="Class"
              style={{ width: `24%` }}
            />
            <TextInput
              placeholder="Level"
              label="Level"
              style={{ width: `24%` }}
            />
            <TextInput
              placeholder="Deity"
              label="Deity"
              style={{ width: `24%` }}
            />
            <TextInput
              placeholder="Homeland"
              label="Homeland"
              style={{ width: `%` }}
            />
            <TextInput
              placeholder="Race"
              label="Race"
              style={{ width: `20%` }}
            />
            <TextInput
              placeholder="Size"
              label="Size"
              style={{ width: `10%` }}
            />
            <TextInput
              placeholder="Gender"
              label="Gender"
              style={{ width: `10%` }}
            />
            <TextInput placeholder="Age" label="Age" style={{ width: `10%` }} />
            <TextInput
              placeholder="Height"
              label="Height"
              style={{ width: `10%` }}
            />
            <TextInput
              placeholder="Weight"
              label="Weight"
              style={{ width: `10%` }}
            />
            <TextInput
              placeholder="Hair"
              label="Hair"
              style={{ width: `10%` }}
            />
            <TextInput
              placeholder="Eyes"
              label="Eyes"
              style={{ width: `10%` }}
            />
          </Container>
        </Container>
      </Center>
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
              style={{ display: `flex`, width: `28%`, alignItems: `center` }}
            >
              <Paper
                shadow="md"
                radius="sm"
                withBorder
                style={{
                  backgroundColor: `black`,
                  color: `white`,
                  height: `85%`,
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
                size="xs"
                style={{ width: `20%` }}
              />
              <TextInput
                description="Ability Modifier"
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
              style={{ display: `flex`, width: `28%`, alignItems: `center` }}
            >
              <Paper
                shadow="md"
                radius="sm"
                withBorder
                style={{
                  backgroundColor: `black`,
                  color: `white`,
                  height: `85%`,
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
                size="xs"
                style={{ width: `20%` }}
              />
              <TextInput
                description="Ability Modifier"
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
              style={{ display: `flex`, width: `28%`, alignItems: `center` }}
            >
              <Paper
                shadow="md"
                radius="sm"
                withBorder
                style={{
                  backgroundColor: `black`,
                  color: `white`,
                  height: `85%`,
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
                size="xs"
                style={{ width: `20%` }}
              />
              <TextInput
                description="Ability Modifier"
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
              style={{ display: `flex`, width: `28%`, alignItems: `center` }}
            >
              <Paper
                shadow="md"
                radius="sm"
                withBorder
                style={{
                  backgroundColor: `black`,
                  color: `white`,
                  height: `85%`,
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
                size="xs"
                style={{ width: `20%` }}
              />
              <TextInput
                description="Ability Modifier"
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
              style={{ display: `flex`, width: `28%`, alignItems: `center` }}
            >
              <Paper
                shadow="md"
                radius="sm"
                withBorder
                style={{
                  backgroundColor: `black`,
                  color: `white`,
                  height: `85%`,
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
                size="xs"
                style={{ width: `20%` }}
              />
              <TextInput
                description="Ability Modifier"
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
              style={{ display: `flex`, width: `28%`, alignItems: `center` }}
            >
              <Paper
                shadow="md"
                radius="sm"
                withBorder
                style={{
                  backgroundColor: `black`,
                  color: `white`,
                  height: `85%`,
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
                size="xs"
                style={{ width: `20%` }}
              />
              <TextInput
                description="Ability Modifier"
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
      <Center
        style={{
          border: "1px solid black",
          width: `100%`,
          padding: 0,
          margin: 0,
        }}
      >
        <h1>Defense</h1>
      </Center>
      <Center
        style={{
          border: "1px solid black",
          width: `100%`,
          padding: 0,
          margin: 0,
        }}
      >
        <h1>Offense</h1>
      </Center>
      <Center
        style={{
          border: "1px solid black",
          width: `100%`,
          padding: 0,
          margin: 0,
        }}
      >
        <h1>Skills</h1>
      </Center>
      <Center
        style={{
          border: "1px solid black",
          width: `100%`,
          padding: 0,
          margin: 0,
        }}
      >
        <h1>Feats</h1>
      </Center>
      <Center
        style={{
          border: "1px solid black",
          width: `100%`,
          padding: 0,
          margin: 0,
        }}
      >
        <h1>Items</h1>
      </Center>
      <Center
        style={{
          border: "1px solid black",
          width: `100%`,
          padding: 0,
          margin: 0,
        }}
      >
        <h1>Spells</h1>
      </Center>
      <Center
        style={{
          border: "1px solid black",
          width: `100%`,
          padding: 0,
          margin: 0,
        }}
      >
        <h1>Notes</h1>
      </Center>
    </Container>
  );
}
