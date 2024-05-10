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

export async function getUserById(
  id: number,
  name: string,
  email: string,
  age: number
) {
  try {
    const response = await fetch(`${Host}/update-user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    return { success: true }; // Return success indicator
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

// export async function editUser(
//   id: number,
//   name: string,
//   email: string,
//   age: number
// ) {
//   try {
//     const response = await fetch(`${Host}/edit-user/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, age }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error);
//     }

//     return { success: true };
//   } catch (error) {
//     console.error("Error updating user:", error);
//     throw error;
//   }
// }
