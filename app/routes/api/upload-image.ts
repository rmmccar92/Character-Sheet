import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
// import { requireUserId } from "~/utils/auth.server";
import { uploadImage } from "~/utils/s3.server";
// import { prisma } from "~/utils/prisma.server";

export const action: ActionFunction = async ({ request }) => {
  //   const userId = await requireUserId(request);

  const imageUrl = await uploadImage(request);
  // const imageUrl =
  //   "https://character-images-841e7945-2fe9-4454-8896-782497c193b1.s3.us-east-2.amazonaws.com/cl91u9bjg0006i4vb8oi8h4c2.JPG";
  // console.log("imageUrl-server", imageUrl);
  return json(imageUrl);
  // if (characterId) {
  //   try {
  //     await prisma.character.update({
  //       where: {
  //         id: characterId,
  //       },
  //       data: {
  //         image: imageUrl,
  //       },
  //     });
  //   } catch (err) {
  //     console.error("ERROR", err);
  //   }
  // } else {
  //   console.error("ERROR", "Invalid character Id");
  // }
};
