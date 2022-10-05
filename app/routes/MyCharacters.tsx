import type { FC } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { getAllCharacters } from "~/utils/character.server";
import { json } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { useLoaderData } from "@remix-run/react";
import { Title } from "@mantine/core";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const characters = await getAllCharacters(userId);
  return json({ characters });
};

interface MyCharactersProps {}

const MyCharacters: FC<MyCharactersProps> = ({}) => {
  const { characters } = useLoaderData();
  return (
    <div>
      <Title>Characters</Title>
      {characters.map((character: any) => (
        <div key={character.id}>
          <h2>{character.characterName}</h2>
        </div>
      ))}
    </div>
  );
};
export default MyCharacters;
