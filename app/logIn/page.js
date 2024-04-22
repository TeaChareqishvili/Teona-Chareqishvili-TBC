// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../contants";
// import { redirect } from "next/navigation";
import { UserAuthorization } from "../../components/userLogIn/UserAuthorization";
// import { Userlogin } from "../actions";

export async function LogIn() {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  // if (cookie?.value) {
  //   redirect("/");
  // }

  //function to set user info
  // const handleLogIn = async (username, password) => {
  //   "use server";
  //   await Userlogin(username, password);
  // };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-[20px] px-[30px] mt-8 ">
      <p className="animate-pulse  text-[20px] mb-4 font-semibold text-[#0C1B31] dark:text-[#949E9E]  tracking-wide">
        Access restricted. Please log in to proceed !
      </p>
      <UserAuthorization handleLogIn={handleLogIn} />
    </div>
  );
}

export default LogIn;
