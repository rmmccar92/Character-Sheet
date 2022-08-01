import {
  Center,
  Container,
  TextInput,
  Textarea,
  Paper,
  Text,
} from "@mantine/core";
// import characterData from "../../data/data.js";

export default function General() {
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
            // defaultValue={characterData[0].name || ""}
            placeholder="Name"
            label="Name"
            style={{ width: `32%` }}
          />
          <TextInput
            // defaultValue={characterData[0].alignment || ""}
            placeholder="Alignment"
            label="Alignment"
            style={{ width: `32%` }}
          />
          <TextInput
            // defaultValue={characterData[0].user.displayName || ""}
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
          <TextInput placeholder="Race" label="Race" style={{ width: `20%` }} />
          <TextInput placeholder="Size" label="Size" style={{ width: `10%` }} />
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
          <TextInput placeholder="Hair" label="Hair" style={{ width: `10%` }} />
          <TextInput placeholder="Eyes" label="Eyes" style={{ width: `10%` }} />
        </Container>
      </Container>
    </Center>
  );
}
