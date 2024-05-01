import { UserAuthorization } from "../../../components/userLogIn/UserAuthorization";

export async function LogIn() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-[20px] px-[30px] mt-8 ">
      <UserAuthorization />
    </div>
  );
}

export default LogIn;
