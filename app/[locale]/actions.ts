"use server";

import { revalidatePath } from "next/cache";
import { getUserById, deleteUser, getProfileInfoEdit } from "../../apiUsers";
import { createUser, createContact } from "../../apiUsers";
import { UserData } from "../../components/userIcons/UserIcons";
import { Host } from "../../apiUsers";
import { getSession } from "@auth0/nextjs-auth0";
import { contactData } from "./interface";
import { getUserId } from "../../apiUsers";
import { CreateBlogData } from "./interface";
import { addNewBlog } from "../../apiUsers";
import { deleteBlog } from "../../apiUsers";
import { getblogById } from "../../apiUsers";
import { DetailProductData } from "./interface";
import { addNewProduct } from "../../apiUsers";
import { getProductById } from "../../apiUsers";
import { deleteProductForAdmin } from "../../apiUsers";

// function to update user info
export async function updateUserAction(id: string, userData: UserData) {
  const { name } = userData;
  getUserById(id, name);
  revalidatePath("/users");
}
//function to create new user
export async function createNewUser(userData: UserData) {
  const { name, email, age } = userData;
  revalidatePath("/users");
  createUser(name, email, age);
}

// function to delete user
export const deleteUserId: (id: string) => Promise<void> = async (
  id: string
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
  revalidatePath("/blog");
}

// delete single blog
export const deleteBlogId: (id: number) => Promise<void> = async (
  id: number
) => {
  await deleteBlog(id);
  revalidatePath("/blog");
};

//function tu edit single blog
export async function editBlog(id: number, formData: CreateBlogData) {
  const { title, description, category, image_url } = formData;

  getblogById(id, title, description, category, image_url);
  revalidatePath("/singleBlog");
}

// create new product

export async function createNewProduct(formData: DetailProductData) {
  const {
    title,
    description,
    stock,
    sale,
    price,
    imageurl,
    category,
    image_gallery,
  } = formData;
  addNewProduct(
    title,
    description,
    stock,
    sale,
    price,
    imageurl,
    category,
    image_gallery
  );
}
// function to edit product info
export async function editProduct(id: number, formData: DetailProductData) {
  const {
    title,
    description,
    stock,
    sale,
    price,
    imageurl,
    category,
    image_gallery,
  } = formData;

  getProductById(
    id,
    title,
    description,
    stock,
    sale,
    price,
    imageurl,
    category,
    image_gallery
  );
  revalidatePath("/singleProductVercel");
}

// function to delete product by admin
export const deleteProductAdminId: (id: number) => Promise<void> = async (
  id: number
) => {
  await deleteProductForAdmin(id);
  revalidatePath("/ProductVercel");
};

// get orders fucntion

export const fetchPayments = async (email: string): Promise<any[]> => {
  try {
    const response = await fetch(`${Host}/api/orders?email=${email}`);
    const text = await response.text(); // Read the response as text
    console.log("Response Text:", text); // Log the response text

    const data = JSON.parse(text); // Parse the response text as JSON

    if (!response.ok) {
      console.error("Error fetching payments:", data.error);
      return [];
    }

    return data.payments || [];
  } catch (error) {
    console.error("Error fetching payments", error);
    return [];
  }
};

// refund

export async function createRefund(charge: string) {
  revalidatePath("/orders");
  await fetch(Host + "/api/create-refund", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ charge }),
  });
}

// add fro products reviews

export async function addProductComment(formData: any) {
  try {
    const response = await fetch(Host + "/api/add-product-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      revalidatePath("/singleProductVercel");
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

// edit user porfile page

interface formProfileData {
  nickname: string;
  phoneNumber: string;
  address: string;
}

export async function updateUserProfile(id: number, formData: formProfileData) {
  const { nickname, phoneNumber, address } = formData;
  getProfileInfoEdit(id, nickname, phoneNumber, address);
  revalidatePath("/profile");
}
