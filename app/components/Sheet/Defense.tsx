import { Center, Container, Paper, TextInput, Text } from "@mantine/core";
// import characterData from "../../data/data.js";

interface DefenseProps {
  character: any;
}

export default function Defense({ character }: DefenseProps) {
  return (
    <Center
      style={{
        border: "1px solid black",
        width: `100%`,
        padding: 0,
        margin: 0,
      }}
    >
      <Container>
        <h1>Defense</h1>
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
            <Text>AC</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.ac : `0`}
            description="Total"
          />
          <TextInput description="Armor Bonus" />
          <TextInput description="Shield Bonus" />
          <TextInput description="Dex Modifier" />
          <TextInput description="Size Modifier" />
          <TextInput description="Natural Armor" />
          <TextInput description="Deflection" />
          <TextInput description="Misc" />
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
            <Text>Touch</Text>
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
            <Text>Flat Footed</Text>
          </Paper>

          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <TextInput />
            <TextInput description="Other AC Modifiers" />
          </div>
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
            <Text>HP</Text>
          </Paper>
          <TextInput description="Total" />
          <TextInput description="Wounds/Current" />
          <TextInput description="Non-Lethal" />
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
            <Text>DR</Text>
          </Paper>
          <TextInput
            defaultValue={
              character ? `${character.dr.type}:${character.dr.value}` : ""
            }
          />
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
            <Text>SR</Text>
          </Paper>
          <TextInput
            defaultValue={
              character ? `${character.sr.type}:${character.sr.value}` : ""
            }
          />
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
            <Text>Fortitude</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.saves.fortitude : "0"}
            description="Total"
          />
          <TextInput description="Base" />
          <TextInput description="Ability Modifier" />
          <TextInput description="Magic Modifier" />
          <TextInput description="Misc" />
          <TextInput description="Temp" />
          <TextInput description="Other" />
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
            <Text>Reflex</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.saves.reflex : "0"}
            description="Total"
          />
          <TextInput description="Base" />
          <TextInput description="Ability Modifier" />
          <TextInput description="Magic Modifier" />
          <TextInput description="Misc" />
          <TextInput description="Temp" />
          <TextInput description="Other" />
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
            <Text>Will</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.saves.will : "0"}
            description="Total"
          />
          <TextInput description="Base" />
          <TextInput description="Ability Modifier" />
          <TextInput description="Magic Modifier" />
          <TextInput description="Misc" />
          <TextInput description="Temp" />
          <TextInput description="Other" />
        </Container>
        {/* <Container
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
            <Text>DR</Text>
          </Paper>
          <TextInput />
        </Container> */}
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
            <Text>Resist</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.resistances.type : ""}
            description="Resistances"
          />
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
            <Text>Immune</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.immunities.type : ""}
            description="Immunities"
          />
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
            <Text>CMD</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.cmd.total : "0"}
            description="Total"
          />
          <TextInput description="BAB" />
          <TextInput description="Strength Modifier" />
          <TextInput description="Dex Modifier" />
          <TextInput description="Size Modifier" />
          <TextInput description="Misc" />
          <TextInput description="Temp" />
        </Container>
      </Container>
    </Center>
  );
}
