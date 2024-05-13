"use server";

import { revalidatePath } from "next/cache";
import { getUserById, deleteUser } from "@/apiUsers";
import addUserInfo from "../../components/addUserform/AddUSerForm";
import { UserData } from "@/components/userIcons/UserIcons";

export async function updateUserAction(id: number, userData: UserData) {
  const { name, email, age } = userData;
  getUserById(id, name, email, age);
  revalidatePath("/users");
}
export async function createUserAction(userData: UserData) {
  const { name, email, age } = userData;
  revalidatePath("/users");
  addUserInfo(name, email, age);
}

export const deleteUserId: (id: number) => Promise<void> = async (
  id: number
) => {
  await deleteUser(id);
  revalidatePath("/users");
};
