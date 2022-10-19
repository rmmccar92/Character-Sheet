import { prisma } from "./prisma.server";
import type { CharacterForm, FeatsAndTraits } from "./types.server";
import { getUserSession } from "./auth.server";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";

export const createCharacter = async (
  character: CharacterForm,
  request: Request
) => {
  const session = await getUserSession(request);
  const userId = session.get("userId");

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
  // const characterToUpdate = await prisma.character.findUnique({
  //   where: {
  //     id: characterId,
  //   },
  // });
  // console.log("character", character);

  const skills = JSON.parse(character.skills! as any);
  const feats = JSON.parse(character.feats! as any);
  const traits = JSON.parse(character.traits! as any);
  character.skills = skills;
  character.feats = feats;
  character.traits = traits;

  // Testing values
  // console.log("character", character);
  // return null;

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
        image: character.image,
      },
    });
    console.log("updating", characterId);
    console.log("update");
  } catch (err) {
    console.error("ERROR", err);
  }
  await updateFeatsAndTraits(characterId, feats, traits);
  return null;
  // return redirect(`/mycharacters`);
};

export const updateFeatsAndTraits = async (
  characterId: string,
  feats?: [],
  traits?: []
) => {
  if (feats && traits === undefined) return null;
  feats?.forEach(async (feat: any) => {
    console.log("feat", feat);
    try {
      const newFeat: FeatsAndTraits = await prisma.feat.create({
        data: {
          character: {
            connect: {
              id: characterId,
            },
          },
          name: feat.name,
          description: feat.description,
        },
      });
      console.log("newFeat", newFeat);
    } catch (err) {
      console.error("ERROR", err);
    }
  });
  traits?.forEach(async (trait: any) => {
    const newTrait = await prisma.trait.create({
      data: {
        character: {
          connect: {
            id: characterId,
          },
        },
        name: trait.name,
        description: trait.description,
      },
    });
  });
};

export const getAllFeats = async (characterId: string) => {
  return await prisma.feat.findMany({
    where: {
      characterId,
    },
  });
};
export const getAllTraits = async (characterId: string) => {
  return await prisma.feat.findMany({
    where: {
      characterId,
    },
  });
};

export const updateFeats = async (
  feat: FeatsAndTraits,
  characterId: string
) => {
  if (
    feat.name === "" ||
    feat.name === undefined ||
    feat.description === "" ||
    feat.description === undefined
  )
    return null;
  try {
    const feats = await prisma.feat.create({
      data: {
        character: {
          connect: {
            id: characterId,
          },
        },
        name: feat?.name,
        description: feat.description,
      },
    });
    console.log("feats", feats);
    return json(feats, { status: 200 });
  } catch (err) {
    console.error("ERROR", err);
  }
};

export const updateTraits = async (
  trait: FeatsAndTraits,
  characterId: string
) => {
  if (
    trait.name === "" ||
    trait.name === undefined ||
    trait.description === "" ||
    trait.description === undefined
  )
    return null;
  try {
    const traits = await prisma.feat.create({
      data: {
        character: {
          connect: {
            id: characterId,
          },
        },
        name: trait.name,
        description: trait.description,
      },
    });
    console.log("feats", traits);
    return json(traits, { status: 200 });
  } catch (err) {
    console.error("ERROR", err);
  }
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
    include: {
      feats: true,
      traits: true,
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
