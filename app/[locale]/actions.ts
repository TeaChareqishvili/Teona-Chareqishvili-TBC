"use server";

import { revalidatePath } from "next/cache";
import { getUserById, deleteUser } from "../../apiUsers";
import { createUser } from "../../apiUsers";
import { UserData } from "../../components/userIcons/UserIcons";
import { Host } from "../../apiUsers";

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
  const response = await fetch(Host + "/api/add-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });

  const result = await response.json();

  if (result) {
    revalidatePath("/users");
  }
}

export const handleAddToCart = async (productId: string) => {
  "use server";
  try {
    const response = await fetch("http://localhost:3000/api/add-product-cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 46,
        productId: productId,
        quantity: 1,
      }),
    });
    revalidatePath("/ProductVercel");
    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export const handleDecrementCart = async (productId: string) => {
  "use server";
  try {
    const response = await fetch(
      "http://localhost:3000/api/decrement-product",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 46,
          productId: productId,
          quantity: 1,
        }),
      }
    );
    revalidatePath("/ProductVercel");
    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export const handleClearCart = async () => {
  "use server";
  try {
    const response = await fetch(`${Host}/api/delete-all-product`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 46,
      }),
    });

    // Ensure the cache is invalidated so the page shows the latest cart state
    revalidatePath("/ProductVercel");

    if (!response.ok) {
      throw new Error("Failed to clear cart");
    }
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};

export const handleRemoveProductFromCart = async (productId: string) => {
  "use server";
  try {
    const response = await fetch(`${Host}/api/delete-product`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 46,
        productId: productId,
      }),
    });

    revalidatePath("/ProductVercel");

    if (!response.ok) {
      throw new Error("Failed to remove item from cart");
    }
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};
