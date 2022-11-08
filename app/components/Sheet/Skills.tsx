import {
  Center,
  Table,
  Container,
  Text,
  TextInput,
  Paper,
} from "@mantine/core";
import skills from "~/utils/data.js";

interface SkillsProps {
  character: any;
}
export default function Skills({ character }: SkillsProps) {
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
