import { Button } from "@mantine/core";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";
import { requireUserId } from "~/utils/auth.server";
import type { LoaderFunction } from "@remix-run/node";
import { Link, Form } from "@remix-run/react";
import Layout from "~/components/Layout";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};
export default function Index() {
  return (
    <Layout>
      <Form action="/logout" method="post">
        <Button type="submit">Logout</Button>
      </Form>
    </Layout>
  );
}
