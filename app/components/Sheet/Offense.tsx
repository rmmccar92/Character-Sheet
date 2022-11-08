import {
  Button,
  Center,
  Container,
  Paper,
  Text,
  TextInput,
} from "@mantine/core";

// TODO: Weapons start on 175 can be refactored into components
// TODO: Add Button functions Buttons start on 249

interface OffenseProps {
  character: any;
}

export default function Offense({ character }: OffenseProps) {
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
        <h1>Offense</h1>
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
            <Text>Initiative</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.initiative : `0`}
            description="Total"
          />
          <TextInput description="Dex Modifier" />
          <TextInput description="Misc Modifier" />
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
            <Text>BAB</Text>
          </Paper>
          <TextInput defaultValue={character ? character.bab : `0`} />
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
            <Text>Conditional</Text>
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
            <Text>Speed</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.speed : `10ft`}
            description="Base"
          />
          <TextInput description="With Armor" />
          <TextInput description="Fly" />
          <TextInput description="Swim" />
          <TextInput description="Climb" />
          <TextInput description="Burrow" />
          <TextInput description="Temp" />
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
            <Text>CMB</Text>
          </Paper>
          <TextInput
            defaultValue={character ? character.cmb : `0`}
            description="Total"
          />
          <TextInput description="BAB" />
          <TextInput description="Str Modifier" />
          <TextInput description="Size Modifier" />
          <TextInput description="Misc Modifier" />
          <TextInput description="Temp" />
        </Container>
        <Container style={{ marginBottom: "1%" }}>
          <Center style={{ display: `flex`, flexDirection: "column" }}>
            <h2>Weapons</h2>
            <Container style={{ display: `flex`, flexDirection: "row" }}>
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
                <Text>Melee</Text>
              </Paper>
              <TextInput description="Weapon" />
              <TextInput description="Attack Bonus" />
              <TextInput description="Damage" />
              <TextInput description="Crit" />
              <TextInput description="Type" />
              <TextInput description="Notes" />
            </Container>
            <Container style={{ display: `flex`, flexDirection: "row" }}>
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
                <Text>Ranged</Text>
              </Paper>
              <TextInput description="Weapon" />
              <TextInput description="Attack Bonus" />
              <TextInput description="Damage" />
              <TextInput description="Crit" />
              <TextInput description="Type" />
              <TextInput description="Notes" />
            </Container>
            <Container
              style={{
                display: `flex`,
                flexDirection: "row",
                marginTop: "1%",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Button> Add Melee</Button>
              <Button> Add Ranged</Button>
            </Container>
          </Center>
        </Container>
      </Container>
    </Center>
  );
}
