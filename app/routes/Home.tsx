import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { HubPanel } from "~/components/hub-panel";
import Layout from "~/components/Layout";
import { getOtherUsers } from "~/utils/users.server";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Title, Box, Text } from "@mantine/core";
import AnimatedButton from "../components/AnimatedBtn";
import { useNavigate } from "@remix-run/react";

// export const loader: LoaderFunction = async ({ request }) => {
//   const userId = await requireUserId(request);
//   const users = await getOtherUsers(userId);
//   return json({ users });
// };



export default function Home() {
  const navigate = useNavigate()
  const handlePageChange = ()=> navigate(`/login`)
  // const { users } = useLoaderData();
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
          "linear-gradient(to bottom, rgba(20, 46, 152, 0.22), rgba(0, 0, 0, 0.53)), url(https://cdn.wallpapersafari.com/7/23/e84ObF.jpg) no-repeat",
        backgroundSize: "cover",
        boxShadow: "4px 15px 45px black",
      }}
    >
      <Title
        sx={{
          color: "white",
          margin: "10em 0 0 2em",
        }}
      >
        <Text
          className="welcomeText"
          sx={{
            fontSize: "100px",
            lineHeight: "140px",
          }}
        >
          Your Adventure
          <br /> <span style={{ marginLeft: "3em" }}>Starts Here!</span>
        </Text>
      </Title>
      <AnimatedButton
      onClick={handlePageChange}
      style={{
        position: "absolute",
        right: "20em",
        top: "4em",
        backgroundColor: "rgba(255,255,19,.3)",
        borderRadius: "12px",
        color: "white",
        width: "15em",
        height: "5em",
        transition: "1s all",
      }}
      >
      <Text 
      sx={{ fontSize: "40px" }}>
        Sign-in
        </Text>
        </AnimatedButton>
    </Box>
  );
}
