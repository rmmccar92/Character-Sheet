import { Button } from "@mantine/core";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return <Button>Hello</Button>;
}
