import type { ActionFunction } from "@remix-run/node";
import {
  updateFeats,
  updateTraits,
  getCharacter,
} from "~/utils/character.server";
import { json } from "@remix-run/node";
import type { FeatsAndTraits } from "~/utils/types.server";

export const action: ActionFunction = async ({ request, params }) => {
  const { type } = params;
  const form = await request.formData();
  const values: FeatsAndTraits = Object.fromEntries(form);
  const character = await getCharacter(params.characterId as string);
  console.log("values", values);
  console.log("character", character);
  console.log("type", type);

  // if (character) {
  //   if (type === "feats") {
  //     try {
  //       const featsArray = await updateFeats({ ...values }, character.id);
  //       console.log("featsArray", featsArray);
  //       return json(featsArray);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   } else if (type === "traits") {
  //     try {
  //       const traitsArray = await updateTraits({ ...values }, character.id);
  //       console.log("traitsArray", traitsArray);
  //       return json(traitsArray);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   } else return json({ error: "Invalid type" });
  // } else return json({ error: "Invalid character" });
  return json(character);
};
