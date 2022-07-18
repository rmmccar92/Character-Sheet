import {
  Center,
  Table,
  Container,
  Text,
  TextInput,
  Paper,
} from "@mantine/core";

export default function Skills() {
  const skills = [
    {
      name: "Acrobatics",
      ability: "Dexterity",
      modifier: "Dex Modifier",
      trained: false,
    },
    {
      name: "Appraise",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: false,
    },
    {
      name: "Bluff",
      ability: "Charisma",
      modifier: "Cha Modifier",
      trained: false,
    },
    {
      name: "Climb",
      ability: "Strength",
      modifier: "Str Modifier",
      trained: false,
    },
    {
      name: "Craft",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: false,
    },
    {
      name: "Diplomacy",
      ability: "Charisma",
      modifier: "Cha Modifier",
      trained: false,
    },
    {
      name: "Disable Device",
      ability: "Dexterity",
      modifier: "Dex Modifier",
      trained: true,
    },
    {
      name: "Disguise",
      ability: "Charisma",
      modifier: "Cha Modifier",
      trained: false,
    },
    {
      name: "Escape Artist",
      ability: "Dexterity",
      modifier: "Dex Modifier",
      trained: false,
    },
    {
      name: "Fly",
      ability: "Dexterity",
      modifier: "Dex Modifier",
      trained: false,
    },
    {
      name: "Handle Animal",
      ability: "Charisma",
      modifier: "Cha Modifier",
      trained: true,
    },
    {
      name: "Heal",
      ability: "Wisdom",
      modifier: "Wis Modifier",
      trained: false,
    },
    {
      name: "Intimidate",
      ability: "Charisma",
      modifier: "Cha Modifier",
      trained: false,
    },
    {
      name: "Knowledge Arcana",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge History",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge Local",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge Nature",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge Nobility",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge Planes",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge Religion",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge Dungeoneering",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge Engineering",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Knowledge Geography",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Linguistics",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Perception",
      ability: "Wisdom",
      modifier: "Wis Modifier",
      trained: false,
    },
    {
      name: "Perform",
      ability: "Charisma",
      modifier: "Cha Modifier",
      trained: false,
    },
    {
      name: "Profession",
      ability: "Wisdom",
      modifier: "Wis Modifier",
      trained: true,
    },
    {
      name: "Ride",
      ability: "Dexterity",
      modifier: "Dex Modifier",
      trained: false,
    },
    {
      name: "Sense Motive",
      ability: "Wisdom",
      modifier: "Wis Modifier",
      trained: false,
    },
    {
      name: "Sleight of Hand",
      ability: "Dexterity",
      modifier: "Dex Modifier",
      trained: true,
    },
    {
      name: "Spellcraft",
      ability: "Intelligence",
      modifier: "Int Modifier",
      trained: true,
    },
    {
      name: "Stealth",
      ability: "Dexterity",
      modifier: "Dex Modifier",
      trained: false,
    },
    {
      name: "Survival",
      ability: "Wisdom",
      modifier: "Wis Modifier",
      trained: false,
    },
    {
      name: "Swim",
      ability: "Strength",
      modifier: "Str Modifier",
      trained: false,
    },
    {
      name: "Use Magic Device",
      ability: "Charisma",
      modifier: "Cha Modifier",
      trained: true,
    },
  ];
  const rows = skills.map((skill) => (
    <tr key={skill.name}>
      <td>
        <Text>{skill.name}</Text>
      </td>
      <td>
        <TextInput>{/* {skill.total} */}</TextInput>
      </td>
      <td>
        <TextInput>{/* {skill.mod} */}</TextInput>
      </td>
      <td>
        <TextInput>{/* {skill.ranks} */}</TextInput>
      </td>
      <td>
        <TextInput>{/* {skill.class} */}</TextInput>
      </td>
      <td>
        <TextInput>{/* {skill.racial} */}</TextInput>
      </td>
      <td>
        <TextInput>{/* {skill.trait} */}</TextInput>
      </td>
      <td>
        <TextInput>{/* {skill.misc} */}</TextInput>
      </td>
    </tr>
  ));
  return (
    <Center
      style={{
        border: "1px solid black",
        width: `100%`,
        padding: 0,
        margin: 0,
      }}
    >
      <Container
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <h1>Skills</h1>
        <Table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Skill</th>
              <th>Total</th>
              <th>Mod</th>
              <th>Ranks</th>
              <th>Class</th>
              <th>Racial</th>
              <th>Trait</th>
              <th>Misc</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            // justifyContent: "flex-start",
            flexWrap: "wrap",
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
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
              <Text>Languages</Text>
            </Paper>
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
              <Text>Notes</Text>
            </Paper>
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
              <Text>XP</Text>
            </Paper>
            <TextInput description="total" />
            <TextInput description="needed" />
          </Container>
        </Container>
      </Container>
    </Center>
  );
}
