import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { HubPanel } from "~/components/hub-panel";
import Layout from "~/components/Layout";
import { getOtherUsers } from "~/utils/users.server";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData, Form } from "@remix-run/react";
import { Image, Box, Text, Button } from "@mantine/core";
import AnimatedButton from "../components/AnimatedBtn";
import { useNavigate } from "@remix-run/react";

export default function hub(){
    return(
        <Text sx={{color: "white"}}>This is the Hub page</Text>
    )
}