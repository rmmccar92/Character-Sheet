import { Container, Avatar, Button, Text } from "@mantine/core";
import type { Profile } from "@prisma/client";

interface props {
  profile: Profile;
  className?: string;
  onClick?: (...args: any) => any;
}
export default function UserCircle({ profile, onClick, className }: props) {
  return (
    <Container
      onClick={onClick}
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "100px",
        padding: "0",
        margin: "2%",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: "grey",
        cursor: "pointer",
      }}
    >
      <Text>
        {profile.firstName.charAt(0).toUpperCase()}
        {profile.lastName.charAt(0).toUpperCase()}
      </Text>
    </Container>
  );
}
