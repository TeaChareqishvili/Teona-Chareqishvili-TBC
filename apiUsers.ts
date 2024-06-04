import { getSession } from "@auth0/nextjs-auth0";

export const Host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://teona-chareqishvili-tbc.vercel.app";

export type Users = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export async function getUsers() {
  try {
    const response = await fetch(Host + "/api/get-user");
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
  return await fetch(Host + "/api/add-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function deleteUser(id: number) {
  const response = await fetch(`${Host}/api/delete-user/${id}`, {
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
    const response = await fetch(`${Host}/api/edit-user/${id}`, {
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

// products - carts

// get products from database
export async function getProducts() {
  try {
    const response = await fetch(Host + "/api/get-product");
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    const data = await response.json();

    const { products } = data;

    return products?.rows;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

// function to get product detail
export async function getProductDetail(id: string) {
  const response = await fetch(`${Host}/api/get-product/${id}`);
  const data = await response.json();
  const product = data.products?.rows ? data.products.rows[0] : null;
  return product;
}

export async function getUserCart() {
  const userSubId = await getUserId();
  console.log(userSubId, "getusercart");
  if (!userSubId) {
    return null;
  }
  const response = await fetch(Host + `/api/get-cart/${userSubId}`, {
    cache: "no-store",
  });
  const carts = await response.json();

  const [cart] = carts.carts.rows;

  return cart;
}

// get logged in user's id
export async function getUserId() {
  const session = await getSession();
  // console.log(session, "session");
  const user = session ? session.user : null;
  // console.log(user, "user");
  const id = user ? user.sub : null;

  // console.log(id, "aidii");
  // akamde modis
  const userSubId = await fetch(Host + `/api/get-user-sub/${id}`, {
    cache: "no-store",
  });

  console.log(userSubId, "sibid");
  const userSerialId = await userSubId.json();
  // console.log(userSerialId, "serial id");
  const userId = userSerialId.usersId;
  // console.log(userId, "userid");
  return userId;
}
// function to get all blogs
export async function getBlogs() {
  try {
    const response = await fetch(Host + "/api/get-all-blogs");
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    const data = await response.json();

    const { blogs } = data;

    return blogs;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

// create contact

export async function createContact(
  name: string,
  email: string,
  phone: string,
  message: any
) {
  return await fetch(Host + "/api/add-contact", {
    method: "POST",
    body: JSON.stringify({ name, email, phone, message }),
  });
}
