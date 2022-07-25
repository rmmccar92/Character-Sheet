import { Button, Container, Title } from "@mantine/core";
import { Form } from "@remix-run/react";
import type { User } from "@prisma/client";
import UserCircle from "./user-circle";
interface props {
  users: User[];
}

export function HubPanel({ users }: props) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
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

      <Title>Companions</Title>
      <Container
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        {users.map((user) => (
          <UserCircle key={user.id} profile={user.profile} />
        ))}
      </Container>
    </Container>
  );
}
