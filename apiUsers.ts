export const Host = "http://localhost:3000/api";

export interface Users {
  id: number;
  name: string;
  email: string;
  age: number;
}

export async function getUsers() {
  const response = await fetch(Host + "/get-user");
  const { users } = await response.json();
  return users.rows;
}

// export async function addUserInfo(formData: FormData) {
//   "use server";
//   const { name, email, age } = Object.fromEntries(formData);
//   const response = await fetch(Host + "/add-user", {
//     method: "POST",
//     body: JSON.stringify({ name, email, age }),
//   });
//   console.log(`response `, { response });
// }

export async function deleteUser(id: number) {
  const response = await fetch(`${Host}/delete-user/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return response.json();
}
