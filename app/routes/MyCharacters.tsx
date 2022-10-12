import type { FC } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { getAllCharacters } from "~/utils/character.server";
import { json } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { Form, useLoaderData } from "@remix-run/react";
import { Container, Title, Button } from "@mantine/core";
import Layout from "~/components/Layout";
import styles from "../styles/roster.css";
import CharacterCircle from "~/components/character-circle";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "@remix-run/react";

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
  const navigate = useNavigate();
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
                <CharacterCircle image={character.image} />
                <Form method="post" action={`/mycharacters/${character.id}`}>
                  <Button type="submit" name="delete">
                    <MdDeleteForever className="delete-icon" />
                  </Button>
                </Form>
              </div>
            ))}
          </>
        ) : (
          <div onClick={() => navigate("/hub")}>
            <Title style={{ cursor: "pointer" }}>
              Roster Empty Click Here To Go Back
            </Title>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default MyCharacters;
