import {
  Center,
  Container,
  TextInput,
  Textarea,
  Paper,
  Text,
} from "@mantine/core";
import Abilities from "~/components/Abilities";
import Defense from "~/components/Defense";
import Equipment from "~/components/Equipment";
import Feats from "~/components/Feats";
import General from "~/components/General";
import Items from "~/components/Items";
import Notes from "~/components/Notes";
import Offense from "~/components/Offense";
import Skills from "~/components/Skills";
import Spells from "~/components/Spells";
// TODO: MAKE THESE SECTIONS COMPONENTS
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
      <General />
      <Abilities />
      <Offense />
      <Defense />
      <Skills />
      <Feats />
      <Equipment />
      <Items />
      <Spells />
      <Notes />
    </Container>
  );
}
