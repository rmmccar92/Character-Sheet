import { prisma } from "./prisma.server";
import type { CharacterForm } from "./types.server";
import { getUserSession } from "./auth.server";
import { redirect } from "@remix-run/node";

export const createCharacter = async (
  character: CharacterForm,
  request: Request
) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  // const skills = JSON.parse(character.skills! as any);
  // const feats = JSON.parse(character.feats! as any);
  // const traits = JSON.parse(character.traits! as any);
  // character.skills = skills;
  // character.feats = feats;
  // character.traits = traits;

  // Creation process
  const newCharacter = await prisma.character.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      characterName: character.characterName,
    },
  });
  return redirect(`/${newCharacter.id}`);
};

export const updateCharacter = async (
  character: CharacterForm,
  characterId: string
) => {
  const characterToUpdate = await prisma.character.findUnique({
    where: {
      id: characterId,
    },
  });
  console.log("character", character);

  const skills = JSON.parse(character.skills! as any);
  const feats = JSON.parse(character.feats! as any);
  const traits = JSON.parse(character.traits! as any);
  character.skills = skills;
  character.feats = feats;
  character.traits = traits;
  try {
    const update = await prisma.character.update({
      where: {
        id: characterId,
      },
      data: {
        class: character.characterClass,
        alignment: character.alignment as any,
        level: character.level,
        deity: character.deity,
        home: character.homeland,
        race: character.race,
        size: character.size,
        gender: character.gender,
        age: character.characterAge,
        stats: {
          strength: parseInt(character?.strength as any) || 0,
          dexterity: parseInt(character?.dexterity as any) || 0,
          constitution: parseInt(character?.constitution as any) || 0,
          wisdom: parseInt(character?.wisdom as any) || 0,
          intelligence: parseInt(character?.intelligence as any) || 0,
          charisma: parseInt(character?.charisma as any) || 0,
        },
        skills: {
          ...(character.skills as any),
        },

        // BUG: Argument data.feats/traits of type FeatListCreateEnvelopeInput needs at least one argument.
        feats: {
          ...((character.feats as any) || {}),
        },
        traits: {
          ...((character.traits as any) || {}),
        },
        image: character.image,
      },
    });
    console.log("update");
  } catch (err) {
    console.error("ERROR", err);
  }
  return redirect(`/mycharacters`);
};

export const getAllCharacters = async (userId: string) => {
  return await prisma.character.findMany({
    where: {
      userId,
    },
  });
};

export const getCharacter = async (characterId: string) => {
  if (!characterId) return null;
  const character = await prisma.character.findUnique({
    where: {
      id: characterId,
    },
  });
  return character;
};

export const deleteCharacter = async (characterId: string) => {
  try {
    const deleteCharacter = await prisma.character.delete({
      where: {
        id: characterId,
      },
    });
    return { message: "Character deleted" };
  } catch (err) {
    console.error("ERROR", err);
  }
};
