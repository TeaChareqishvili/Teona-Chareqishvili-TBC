"use server";

import { revalidatePath } from "next/cache";
import { getUserById, deleteUser } from "@/apiUsers";
import { createUser } from "../../apiUsers";
import { UserData } from "@/components/userIcons/UserIcons";
import { Host } from "@/apiUsers";

export async function updateUserAction(id: number, userData: UserData) {
  const { name, email, age } = userData;
  getUserById(id, name, email, age);
  revalidatePath("/users");
}
export async function createNewUser(userData: UserData) {
  const { name, email, age } = userData;
  revalidatePath("/users");
  createUser(name, email, age);
}

export const deleteUserId: (id: number) => Promise<void> = async (
  id: number
) => {
  await deleteUser(id);
  revalidatePath("/users");
};

export async function addUserInfo(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  const response = await fetch(Host + "/add-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });

  const result = await response.json();

  if (result) {
    revalidatePath("/users");
  }
}
