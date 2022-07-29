import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Modal from "~/components/Modal";
import { getUserById } from "~/utils/users.server";

export const loader: LoaderFunction = async ({ params }) => {
  const userId = params.id as string;
  if (typeof userId !== "string") {
    return redirect("/home");
  }
  const user = await getUserById(userId);
  return json({ user });
};

const TestModal = () => {
  const { user } = useLoaderData();
  return (
    <Modal isOpen={true}>
      <h2>{user.profile.firstName}</h2>
      <h2>{user.profile.lastName}</h2>
    </Modal>
  );
};

export default TestModal;
