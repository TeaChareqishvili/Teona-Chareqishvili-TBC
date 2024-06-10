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

// function to delete user
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

// function to get blog details
export async function getBlogDetail(id: string) {
  const response = await fetch(`${Host}/api/get-all-blogs/${id}`);
  console.log(response, "response");
  const data = await response.json();
  const blog = data.blogs?.rows ? data.blogs.rows[0] : null;
  return blog;
}

// function to get users cart
export async function getUserCart() {
  const userSubId = await getUserId();

  if (!userSubId) {
    return null;
  }
  try {
    const response = await fetch(Host + `/api/get-cart/${userSubId}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const carts = await response.json();

    const [cart] = carts.carts.rows;

    return cart;
  } catch (error) {
    console.error("Failed to fetch user ID:", error);
    return null;
  }
}

// function  get logged in user's id
export async function getUserId() {
  const session = await getSession();
  // console.log(session, "sesion ");
  const user = session ? session.user : null;
  const id = user ? user.sub : null;

  if (!id) {
    return null;
  }

  try {
    const userSubId = await fetch(Host + `/api/get-user-sub/${id}`, {
      cache: "no-store",
    });

    if (!userSubId.ok) {
      throw new Error("Network response was not ok");
    }

    const userSerialId = await userSubId.json();

    const userId = userSerialId.usersId;

    return userId;
  } catch (error) {
    console.error("Failed to fetch user ID:", error);
    return null;
  }
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

// function to add new blog

export async function addNewBlog(
  title: string,
  description: string,
  image_url: string,
  category: string
) {
  return await fetch(Host + "/api/add-new-blog", {
    method: "POST",
    body: JSON.stringify({ title, description, image_url, category }),
  });
}

// function to delete blog
export async function deleteBlog(id: number) {
  const response = await fetch(`${Host}/api/delete-blog/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return response.json();
}

// fucntion call edit blog end-point
export async function getblogById(
  id: number,
  title: string,
  description: string,
  category: string,
  image_url: string
) {
  try {
    const response = await fetch(`${Host}/api/edit-blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, category, image_url }),
    });

    console.log(response, "resp");
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

// create new product

export async function addNewProduct(
  title: string,
  description: string,
  stock: number,
  price: string,
  sale: string,
  imageurl: string,
  category: string,
  image_gallery: string[]
) {
  return await fetch(Host + "/api/add-new-product", {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      stock,
      price,
      sale,
      imageurl,
      category,
      image_gallery,
    }),
  });
}

// edit product call
export async function getProductById(
  id: number,
  title: string,
  description: string,
  stock: number,
  price: string,
  sale: string,
  imageurl: string,
  category: string
) {
  try {
    const response = await fetch(`${Host}/api/edit-product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        stock,
        price,
        sale,
        imageurl,
        category,
      }),
    });

    console.log(response, "resp");
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

// function delete product function for admin
export async function deleteProductForAdmin(id: number) {
  try {
    const response = await fetch(`${Host}/api/delete-product-admin/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}
