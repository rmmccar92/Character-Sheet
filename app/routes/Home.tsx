import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { Button } from "@mantine/core";
import { Form } from "@remix-run/react";
import Layout from "~/components/Layout";
export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};
// TODO This is the user hub page
export default function Home() {
  return (
    <Layout>
      <Form action="/logout" method="post">
        <Button type="submit">Logout</Button>
      </Form>
    </Layout>
  );
}
