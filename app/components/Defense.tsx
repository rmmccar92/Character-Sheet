import { Center, Container, Paper, TextInput, Text } from "@mantine/core";
// import characterData from "../../data/data.js";

export default function Defense() {
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
          <TextInput description="Total" />
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
            <Text>SR</Text>
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
            <Text>Fortitude</Text>
          </Paper>
          <TextInput description="Total" />
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
          <TextInput description="Total" />
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
          <TextInput description="Total" />
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
            <Text>DR</Text>
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
            <Text>Resist</Text>
          </Paper>
          <TextInput description="Elemental & Other" />
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
            <Text>Imune</Text>
          </Paper>
          <TextInput description="Effects & Other" />
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
          <TextInput description="Total" />
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
