import { json, createCookieSessionStorage, redirect } from "@remix-run/node";
import { prisma } from "./prisma.server";
import type { RegisterForm, LoginForm } from "./types.server";
import { createUser } from "./users.server";
import bcrypt from "bcryptjs";
const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET environment variable not set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "cs-session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
});

export const register = async (form: RegisterForm) => {
  const exists = await prisma.user.count({ where: { email: form.email } });

  if (exists) {
    return json(
      { error: "User already exists with that email" },
      { status: 400 }
    );
  }

  const newUser = await createUser(form);
  if (!newUser) {
    return json(
      {
        error: "User creation failed",
        fields: { email: form.email, password: form.password },
      },
      { status: 400 }
    );
  }
  return createUserSession(newUser.id, "/");
};

export const login = async (form: LoginForm) => {
  console.log("login attempt");
  const user = await prisma.user.findUnique({
    where: { email: form.email },
  });

  if (!user || !(await bcrypt.compare(form.password, user.password))) {
    return json({ error: "Login failed" }, { status: 400 });
  }
  // TODO create session
  return createUserSession(user.id, "/");
};

export const createUserSession = async (userId: string, redirectTo: string) => {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
};
