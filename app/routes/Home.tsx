import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { HubPanel } from "~/components/hub-panel";
import Layout from "~/components/Layout";
import { getOtherUsers } from "~/utils/users.server";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const users = await getOtherUsers(userId);
  return json({ users });
};
// TODO This is the user hub page
export default function Home() {
  const { users } = useLoaderData();
  return (
    <Layout>
      <Outlet />
      <HubPanel users={users} />
    </Layout>
  );
}
