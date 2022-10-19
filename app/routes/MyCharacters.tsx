import type { FC } from "react";
import type { LoaderFunction } from "@remix-run/node";
import {
  getAllCharacters,
  getAllFeats,
  getAllTraits,
} from "~/utils/character.server";
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
  // HARDCODED FOR TESTING
  // TODO actually pass in the character id
  return json({ characters });
};

interface MyCharactersProps {}

const MyCharacters: FC<MyCharactersProps> = ({}) => {
  const navigate = useNavigate();
  const { characters } = useLoaderData();

  const handleDate = (date: string) => {
    const readableDate = new Date(date).toLocaleDateString("en-US");
    return readableDate;
  };
  return (
    <Layout>
      <Title>Characters</Title>
      {characters.length > 0 ? (
        <>
          {characters.map((character: any) => (
            <>
              <Container
                className="card-container"
                onClick={() => navigate(`/sheet/${character.id}`)}
              >
                <div className="character-card" key={character.id}>
                  <h2>{character.characterName}</h2>
                  <CharacterCircle image={character.image} />
                  <p>{character.class === "" ? "Unknown" : character.class}</p>
                  <div className="character-card-info">
                    <h4>Created:</h4>
                    <p>{handleDate(character.createdAt)}</p>
                  </div>
                  <div className="character-card-info">
                    <h4>Modified:</h4>
                    <p>{handleDate(character.updatedAt)}</p>
                  </div>
                  <Form method="post" action={`/mycharacters/${character.id}`}>
                    <button
                      type="submit"
                      name="delete"
                      className="delete-button"
                    >
                      <MdDeleteForever className="delete-icon" />
                    </button>
                  </Form>
                </div>
              </Container>
            </>
          ))}
        </>
      ) : (
        <div onClick={() => navigate("/hub")}>
          <Title style={{ cursor: "pointer" }}>
            Roster Empty Click Here To Go Back
          </Title>
        </div>
      )}
    </Layout>
  );
};

export default MyCharacters;
