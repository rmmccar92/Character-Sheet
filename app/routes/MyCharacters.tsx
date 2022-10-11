import { useState } from "react";
import type { FC } from "react";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { getAllCharacters } from "~/utils/character.server";
import { json } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { Form, useLoaderData } from "@remix-run/react";
import { Container, Title, Button } from "@mantine/core";
import Layout from "~/components/Layout";
import styles from "../styles/roster.css";
import CharacterCircle from "~/components/character-circle";
import { MdDeleteForever } from "react-icons/md";
import { deleteCharacter } from "~/utils/character.server";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  console.log(form);
  // await deleteCharacter(request);
  return json({ success: true });
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const characters = await getAllCharacters(userId);
  return json({ characters });
};

interface MyCharactersProps {}

const MyCharacters: FC<MyCharactersProps> = ({}) => {
  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
  };
  const { characters } = useLoaderData();
  const [formData, setFormData] = useState(null);
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
                <Form method="post">
                  <Button
                    type="submit"
                    name="delete"
                    onClick={() => setFormData(character.id)}
                  >
                    <MdDeleteForever className="delete-icon" />
                  </Button>
                </Form>
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
