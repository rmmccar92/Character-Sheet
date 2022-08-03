import { prisma } from "./prisma.server";
import type { CharacterForm } from "./types.server";
import { getUserSession } from "./auth.server";

// TODO: Character creation

export const createCharacter = async (
  character: CharacterForm,
  request: Request
) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  console.log("userId", userId);
  console.log("character", character);
  return null;
  // const newCharacter = await prisma.character.create({
  //   data: {
  //     user: will need context to get user id
  //     character: {
  //       ...character,
  //   },
  // });
};
