import Image from "next/image";
import Banner from "../../../../public/assets/image/userBanner.webp";
import { UserIcons } from "@/components/userIcons/UserIcons";

export default async function Users() {
  const response = await fetch("http://localhost:3001/api/get-user");
  const { users } = await response.json();

  interface Users {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  return (
    <div className="w-full mt-[50px]  flex flex-col items-center justify-center mb-[60px]">
      <Image className="w-full h-[500px] mb-[20px]" src={Banner} alt="banner" />
      <h3 className="text-[#4b504b] text-[24px] underline tracking-wider mb-[20px]">
        Our Users
      </h3>
      <table className="w-4/5 border-2 border-[#e2e6e1] rounded-lg mt-[30px] mb-[30px]">
        <thead>
          <tr className="bg-[#e2e6e1] rounded-md">
            <th className=" py-[15px] text-[18px] text-[#3b4039]">Name</th>
            <th className=" py-[15px] text-[18px] text-[#3b4039]">Email</th>
            <th className=" py-[15px] text-[18px] text-[#3b4039]">Age</th>
            <th className=" py-[15px] text-[18px] text-[#3b4039]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.rows.map((user: Users) => (
            <tr key={user.id} className="border-b border-[#e2e6e1]">
              <td className="pl-[70px] py-[15px] text-[18px] text-[#3b4039]">
                {user.name}
              </td>
              <td className=" py-[15px] text-[18px] text-[#3b4039]">
                {user.email}
              </td>
              <td className=" py-[15px] text-[18px] text-[#3b4039]">
                {user.age}
              </td>
              <td className=" py-[15px] flex items-center justify-center gap-4">
                <UserIcons />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
