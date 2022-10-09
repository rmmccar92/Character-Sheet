import type { FC } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { getAllCharacters } from "~/utils/character.server";
import { json } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { useLoaderData } from "@remix-run/react";
import { Container, Title } from "@mantine/core";
import Layout from "~/components/Layout";
import styles from "../styles/roster.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const characters = await getAllCharacters(userId);
  return json({ characters });
};

interface MyCharactersProps {}

const MyCharacters: FC<MyCharactersProps> = ({}) => {
  const { characters } = useLoaderData();
  return (
    <Layout>
      <Title>Characters</Title>
      <Container className="card-container">
        {characters.length > 0 ? (
          <>
            {characters.map((character: any) => (
              <div className="character-card" key={character.id}>
                <h2>{character.characterName}</h2>
              </div>
            ))}
          </>
        ) : (
          <Title>Roster Empty Click Here To Make a New Character</Title>
        )}
      </Container>
    </Layout>
  );
};

export default MyCharacters;