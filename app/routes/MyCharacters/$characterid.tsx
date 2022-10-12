import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { deleteCharacter } from "~/utils/character.server";

export const action: ActionFunction = async ({ params }) => {
  const { characterid } = params;
  await deleteCharacter(characterid as string);
  //   return json({ success: true });
  return redirect("/mycharacters");
};
