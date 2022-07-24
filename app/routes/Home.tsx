import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { Button, Container } from "@mantine/core";
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
      <Container
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "25%",
            border: "1px solid black",
          }}
        >
          <Button>My Characters</Button>
          <Button>New Character</Button>
        </Container>
        <Container>
          <Form action="/logout" method="post">
            <Button type="submit">Logout</Button>
          </Form>
        </Container>
      </Container>
    </Layout>
  );
}
