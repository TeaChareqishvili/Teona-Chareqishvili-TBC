// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "./contants";
import { revalidatePath } from "next/cache";
import { getUserById } from "@/apiUsers";
import { UserData } from "@/components/userIcons/UserIcons";
// export async function Userlogin(username, password) {
//   "use server";
//   const response = await fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   });

//   const cookieStore = cookies();
//   const user = await response.json();

//   cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token));
//   console.log(user, "resyy");
//   console.log(user.token);
// }

// export async function logout() {
//   "use server";
//   const cookieStore = cookies();
//   cookieStore.delete(AUTH_COOKIE_KEY);
// }

// export const handleLogIn = async () => {
//   const res = await fetch(`http://localhost:3000/api/logout`, {
//     method: "POST",
//   });
// };

export async function updateUserAction(id: number, userData: UserData) {
  const { name, email, age } = userData;
  revalidatePath("/admin");
  getUserById(id, name, email, age);
}
