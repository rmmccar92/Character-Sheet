import { Container } from "@mantine/core";
import Abilities from "~/components/Sheet/Abilities";
import Defense from "~/components/Sheet/Defense";
import Equipment from "~/components/Sheet/Equipment";
import Feats from "~/components/Sheet/Feats";
import General from "~/components/Sheet/General";
import Layout from "~/components/Layout";
import Notes from "~/components/Sheet/Notes";
import Offense from "~/components/Sheet/Offense";
import Skills from "~/components/Sheet/Skills";
import Spells from "~/components/Sheet/Spells";
export default function Sheet() {
  return (
    <Layout>
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
        <Spells />
        <Notes />
      </Container>
    </Layout>
  );
}
