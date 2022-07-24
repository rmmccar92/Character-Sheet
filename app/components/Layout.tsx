// TODO: Can remove any unnedded global layout components by adding here
import { Center } from "@mantine/core";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Center
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {children}
    </Center>
  );
}
