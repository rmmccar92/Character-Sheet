import { ActionFunction, json } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { uploadImage } from "~/utils/s3.server";
import { prisma } from "~/utils/prisma.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const characterId = request.headers.get("characterId");

  const imageUrl = await uploadImage(request);
  if (characterId) {
    try {
      await prisma.character.update({
        where: {
          id: characterId,
        },
        data: {
          image: imageUrl,
        },
      });
    } catch (err) {
      console.error("ERROR", err);
    }
  } else {
    console.error("ERROR", "Invalid character Id");
  }
};
