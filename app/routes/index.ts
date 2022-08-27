import { redirect } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";
import { requireUserId } from "~/utils/auth.server";
import type { LoaderFunction, LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  // await requireUserId(request);
  return redirect("/home");
};
