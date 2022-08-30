import type { LoaderFunction } from "@remix-run/node";
import { getUserSession, requireUserId } from "~/utils/auth.server";
import { HubPanel } from "~/components/hub-panel";
import Layout from "~/components/Layout";
import { getOtherUsers, getUserById } from "~/utils/users.server";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData, Form } from "@remix-run/react";
import { Image, Box, Text, Button } from "@mantine/core";
import AnimatedButton from "../components/AnimatedBtn";
import { useNavigate } from "@remix-run/react";
import styles from "../styles/home.css";

// export const loader: LoaderFunction = async ({ request }) => {
//   const session = await getUserSession(request);
//   const userId = session.get("userId");
//   const user = getUserById(userId) ;
//   if(session){
//   return json({ user })
//   }else{
//     return null
//   }
// };

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Home() {
  const navigate = useNavigate();
  const handlePageChange = () => navigate(`/login`);
  // const { user } = useLoaderData();
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
        <Box className="homePicContainer">
          <Box className="homePic">
            <Image
              radius="xl"
              src="https://techraptor.net/sites/default/files/styles/image_header/public/imports/2019/07/pathfinder2-header.jpg?itok=VwCBEwNC"
              alt="pathfinder box art"
            />
          </Box>
          <Box className="homePic">
            <Image
              radius="xl"
              src="https://cdn.vox-cdn.com/thumbor/S_fGKR7uXBEndbN80Q6AATkvZhc=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22289696/pathfinder_gm_screen_ekaterina_burmak.jpg"
              alt="pathfinder box art"
            />
          </Box>
        </Box>
      </Box>
      {/* <Box
      className="tablePic"
      >
      </Box> */}
      <Form action="/logout" method="post" style={{opacity: "0"}}>
            <Button type="submit" onClick={()=>console.log("works")}>Logout</Button>
      </Form>
      <AnimatedButton onClick={handlePageChange}>
        <Text sx={{ fontSize: "40px" }}>Sign-in</Text>
      </AnimatedButton>
    </Box>
  );
}
