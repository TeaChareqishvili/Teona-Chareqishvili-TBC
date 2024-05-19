export const Host =
  process.env.NEXT_PUBLIC_VERCEL_URL === " development"
    ? "http://localhost:3000/api"
    : "teona-chareqishvili-tbc.vercel.app";

export type Users = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export async function getUsers() {
  try {
    const response = await fetch(Host + "/get-user");
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    const { users } = await response.json();
    return users.rows;
  } catch (error) {
    console.error("Failed to fetch users:", error);

    throw error;
  }
}

export async function createUser(name: string, email: string, age: number) {
  return await fetch(Host + "/add-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function deleteUser(id: number) {
  const response = await fetch(`${Host}//delete-user/${id}`, {
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
    const response = await fetch(`${Host}/edit-user/${id}`, {
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

    return { success: true };
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
