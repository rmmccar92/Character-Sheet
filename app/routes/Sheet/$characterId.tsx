import type { LoaderFunction } from "@remix-run/node";
import { Container } from "@mantine/core";
import { json } from "@remix-run/node";
import { getCharacter } from "~/utils/character.server";
import { useLoaderData } from "@remix-run/react";
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
import styles from "~/styles/sheet.css";

export const loader: LoaderFunction = async ({ request, params }) => {
  const { characterId } = params;
  const character = await getCharacter(characterId as string);
  // console.log(character);
  return json({ character });
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Sheet() {
  const { character } = useLoaderData();

  return (
    <Layout>
      <Container size={840} className="box">
        <General character={character} />
        <Abilities character={character} />
        <Offense character={character} />
        <Defense character={character} />
        <Skills character={character} />
        <Feats character={character} />
        <Equipment character={character} />
        <Spells character={character} />
        <Notes character={character} />
      </Container>
    </Layout>
  );
}
