import { Container, BackgroundImage } from "@mantine/core";

interface props {
  image: string;
  className?: string;
  onClick?: (...args: any) => any;
}
export default function UserCircle({ image, onClick, className }: props) {
  return (
    // <BackgroundImage src={image}>
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
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Text>
        {profile.firstName.charAt(0).toUpperCase()}
        {profile.lastName.charAt(0).toUpperCase()}
      </Text> */}
    </Container>
  );
}
