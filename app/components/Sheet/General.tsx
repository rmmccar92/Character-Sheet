import {
  Center,
  Container,
  TextInput,
  // Textarea,
  // Paper,
  // Text,
} from "@mantine/core";

interface GeneralProps {
  character: any;
}

export default function General({ character }: GeneralProps) {
  console.log(character);
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
            defaultValue={character ? character.characterName : ``}
            label="Name"
            className={
              character ? "character-name-filled" : "character-name-empty"
            }
            style={{ width: `32%` }}
          />
          <TextInput
            defaultValue={character ? character.alignment : ``}
            placeholder="Alignment"
            label="Alignment"
            style={{ width: `32%` }}
          />
          {/* <TextInput
            // defaultValue={characterData[0].user.displayName || ""}
            placeholder="Player"
            label="Player"
            style={{ width: `32%` }}
          /> */}
          <TextInput
            defaultValue={character ? character.class : ``}
            placeholder="Class"
            label="Class"
            style={{ width: `24%` }}
          />
          <TextInput
            defaultValue={character ? character.level : ``}
            placeholder="Level"
            label="Level"
            style={{ width: `24%` }}
          />
          <TextInput
            defaultValue={character ? character.deity : ``}
            placeholder="Deity"
            label="Deity"
            style={{ width: `24%` }}
          />
          <TextInput
            defaultValue={character ? character.homeland : ``}
            placeholder="Homeland"
            label="Homeland"
            style={{ width: `%` }}
          />
          <TextInput
            defaultValue={character ? character.race : ``}
            placeholder="Race"
            label="Race"
            style={{ width: `20%` }}
          />
          <TextInput
            defaultValue={character ? character.size : ``}
            placeholder="Size"
            label="Size"
            style={{ width: `10%` }}
          />
          <TextInput
            defaultValue={character ? character.gender : ``}
            placeholder="Gender"
            label="Gender"
            style={{ width: `10%` }}
          />
          <TextInput placeholder="Age" label="Age" style={{ width: `10%` }} />
          <TextInput
            defaultValue={character ? character.height : ``}
            placeholder="Height"
            label="Height"
            style={{ width: `10%` }}
          />
          <TextInput
            defaultValue={character ? character.weight : ``}
            placeholder="Weight"
            label="Weight"
            style={{ width: `10%` }}
          />
          <TextInput
            defaultValue={character ? character.hair : ``}
            placeholder="Hair"
            label="Hair"
            style={{ width: `10%` }}
          />
          <TextInput
            defaultValue={character ? character.eyes : ``}
            placeholder="Eyes"
            label="Eyes"
            style={{ width: `10%` }}
          />
        </Container>
      </Container>
    </Center>
  );
}
