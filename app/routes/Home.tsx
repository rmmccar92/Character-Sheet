import type { LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/utils/auth.server";
import { HubPanel } from "~/components/hub-panel";
import Layout from "~/components/Layout";
import { getOtherUsers } from "~/utils/users.server";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Title, Box, Text } from "@mantine/core";
import AnimatedButton from "../components/AnimatedBtn";
import { useNavigate } from "@remix-run/react";
import styles from "../styles/home.css";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (user) {
    return json({ user });
  }
  return null;
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Home() {
  const { user } = useLoaderData() || {};
  const navigate = useNavigate();
  const handlePageChange = () => {
    user?.id ? navigate("/hub") : navigate(`/login`);
  };
  return (
    // <Layout>
    //   {/* <Outlet /> */}
    //   {/* <HubPanel users={users} /> */}
    // </Layout>
    <Box
      sx={{
        margin: "auto",
        marginTop: "3em",
        height: "90vh",
        width: "95%",
        display: "flex",
        background:
          "linear-gradient(to left, rgba(100, 6, 115, 0.22)52%, rgba(0, 0, 0, 0.7)70%), url(https://cdn.wallpapersafari.com/7/23/e84ObF.jpg) no-repeat",
        backgroundSize: "cover",
        boxShadow: "4px 15px 45px black",
      }}
    >
      <Box>
        <Text className="welcomeText">
          Your Adventure
          <br /> Starts Here!
        </Text>
        <Text className="welcomeSubText">
          A fully functioning tabletop simulator that les you create your
          character and play with friends without needing to all be in the same
          room.
          <br />
          <br />
          Create your character and play with others! An incredible journey
          awaits! What are you waiting for?
        </Text>
      </Box>
      <AnimatedButton onClick={handlePageChange}>
        <Text sx={{ fontSize: "40px" }}>{user?.id ? "Continue" : "Login"}</Text>
      </AnimatedButton>
    </Box>
  );
}
