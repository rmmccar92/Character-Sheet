import { prisma } from "./prisma.server";
import type { CharacterForm } from "./types.server";
import { getUserSession } from "./auth.server";
import { Skills } from "@prisma/client";

// TODO: Character creation

export const createCharacter = async (
  character: CharacterForm,
  request: Request
) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  const skills = JSON.parse(character.skills! as any);
  character.skills = skills;
  console.log("character", character);
  // const newCharacter = await prisma.character.create({
  //   data: {
  //     userId: userId,
  //     characterName: character.characterName,
  //     class: character.characterClass,
  //     // alignment: character.alignment,
  //     // level: character.level,
  //     // deity: character.deity,
  //     home: character.homeland,
  //     // race: character.race,
  //     // size: character.size,
  //     gender: character.gender,
  //     // characterAge: character.characterAge
  //     stats: {
  //       strength: parseInt(character?.strength) || 0,
  //       dexterity: parseInt(character?.dexterity),
  //       constitution: parseInt(character?.constitution),
  //       wisdom: parseInt(character?.wisdom),
  //       intelligence: parseInt(character?.intelligence),
  //       charisma: parseInt(character?.charisma),
  //     },
  //   },
  // });
  // return { id: newCharacter.id, characterName: newCharacter.characterName };
  return null;
};
