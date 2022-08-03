import { prisma } from "./prisma.server";
import type { CharacterForm } from "./types.server";

// TODO: Character creation

export const createCharacter = async (character: CharacterForm) => {
  // const newCharacter = await prisma.character.create({
  //   data: {
  //     user: will need context to get user id
  //     character: {
  //       ...character,
  //   },
  // });
};
