import type { ActionFunction } from "@remix-run/node";
import {
  updateFeats,
  updateTraits,
  getCharacter,
} from "~/utils/character.server";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  const values = Object.fromEntries(form);
  const character = await getCharacter(params.characterId as string);

  const { type } = params;
  if (character) {
    if (type === "feats") {
      try {
        const featsArray = await updateFeats({ ...values }, character.id);
        console.log("featsArray", featsArray);
        return json(featsArray);
      } catch (err) {
        console.error(err);
      }
    } else if (type === "traits") {
      try {
        const traitsArray = await updateTraits({ ...values }, character.id);
        console.log("traitsArray", traitsArray);
        return json(traitsArray);
      } catch (err) {
        console.error(err);
      }
    } else return json({ error: "Invalid type" });
  } else return json({ error: "Invalid character" });
};
