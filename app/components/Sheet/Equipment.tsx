import {
  Center,
  Container,
  Paper,
  TextInput,
  Text,
  Button,
} from "@mantine/core";

interface EquipmentProps {
  character: any;
}

export default function Equipment({ character }: EquipmentProps) {
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
        <h1>Equipment</h1>
        <Container style={{ marginBottom: "1%", width: "100%" }}>
          <h2>Money</h2>
          <Container
            style={{ display: `flex`, flexDirection: "row", width: "100%" }}
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
              <Text>Platinum Pieces</Text>
            </Paper>
            <TextInput description="Weapon" />
          </Container>
          <Container
            style={{ display: `flex`, flexDirection: "row", width: "100%" }}
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
              <Text>Gold Pieces</Text>
            </Paper>
            <TextInput />
          </Container>
          <Container
            style={{ display: `flex`, flexDirection: "row", width: "100%" }}
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
              <Text>Silver Pieces</Text>
            </Paper>
            <TextInput />
          </Container>
          <Container
            style={{ display: `flex`, flexDirection: "row", width: "100%" }}
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
              <Text>Copper Pieces</Text>
            </Paper>
            <TextInput />
          </Container>
          <Container
            style={{ display: `flex`, flexDirection: "row", width: "100%" }}
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
              <Text>Gems</Text>
            </Paper>
            <TextInput />
          </Container>
          {/* <Container
              style={{
                display: `flex`,
                flexDirection: "row",
                marginTop: "1%",
                width: "100%",
                justifyContent: "space-around",
              }}
            > */}
          {/* <Button> Add Melee</Button>
              <Button> Add Ranged</Button> */}
          {/* </Container> */}
        </Container>
        <Container style={{ marginBottom: "1%", width: "100%" }}>
          <h2>Gear</h2>
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
              <Text>AC Item</Text>
            </Paper>
            <TextInput description="Name" />
            <TextInput description="Bonus" />
            <TextInput description="Type" />
            <TextInput description="Check Penalty" />
            <TextInput description="Spell Failure" />
            <TextInput description="Weight" />
            <TextInput description="Properties" />
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
              <Text>Inventory</Text>
            </Paper>
            <Button>Add Item</Button>
          </Container>
        </Container>
      </Container>
    </Center>
  );
}
