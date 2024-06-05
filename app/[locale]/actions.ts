"use server";

import { revalidatePath } from "next/cache";
import { getUserById, deleteUser } from "../../apiUsers";
import { createUser, createContact } from "../../apiUsers";
import { UserData } from "../../components/userIcons/UserIcons";
import { Host } from "../../apiUsers";
import { getSession } from "@auth0/nextjs-auth0";
import { contactData } from "./interface";
import { getUserId } from "../../apiUsers";
import { CreateBlogData } from "./interface";
import { addNewBlog } from "../../apiUsers";

// function to update user info
export async function updateUserAction(id: number, userData: UserData) {
  const { name, email, age } = userData;
  getUserById(id, name, email, age);
  revalidatePath("/users");
}
//function to create new user
export async function createNewUser(userData: UserData) {
  const { name, email, age } = userData;
  revalidatePath("/users");
  createUser(name, email, age);
}

// function to delete user
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

// function to add product to cart

export const handleAddToCart = async (productId: string) => {
  "use server";
  const userId = await getUserId();
  try {
    const response = await fetch(Host + "/api/add-product-cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
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

// function to decrement product from cart
export const handleDecrementCart = async (productId: string) => {
  "use server";
  const userId = await getUserId();
  try {
    const response = await fetch(Host + "/api/decrement-product", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
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

// function to clear cart
export const handleClearCart = async () => {
  "use server";
  const userId = await getUserId();
  try {
    const response = await fetch(`${Host}/api/delete-all-product`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
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

// function to remove item from cart
export const handleRemoveProductFromCart = async (productId: string) => {
  "use server";
  const userId = await getUserId();
  try {
    const response = await fetch(`${Host}/api/delete-product`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
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

interface PutBlobResult {
  url: string;
}

// function to  update image
export const handleUpdateImg = async (blob: PutBlobResult): Promise<void> => {
  "use server";
  const session = await getSession();
  try {
    const response = await fetch(`${Host}/api/update-image`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: blob.url, session }),
    });

    revalidatePath("/Profile");

    if (!response.ok) {
      throw new Error("Failed to update image");
    }
  } catch (error) {
    console.error("Error :", error);
  }
};

// create contact database
export async function createNewContact(formData: contactData) {
  const { name, email, phone, message } = formData;
  createContact(name, email, phone, message);
}

// create new blog

export async function createNewBlog(formData: CreateBlogData) {
  const { title, description, image_url, category } = formData;
  addNewBlog(title, description, image_url, category);
}
