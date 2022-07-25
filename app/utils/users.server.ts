import { prisma } from "./prisma.server";
import type { RegisterForm } from "./types.server";
import bcrypt from "bcryptjs";

export const createUser = async (user: RegisterForm) => {
  const hash = await bcrypt.hash(user.password, 10);
  console.log("createUser");
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      password: hash,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    },
  });
  return { id: newUser.id, email: newUser.email };
};

export const getOtherUsers = async (userId: string) => {
  return await prisma.user.findMany({
    where: {
      id: { not: userId },
    },
    orderBy: {
      profile: {
        firstName: "asc",
      },
    },
  });
};
