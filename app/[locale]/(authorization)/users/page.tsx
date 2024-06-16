import Image from "next/image";

import { UserIcons } from "@/components/userIcons/UserIcons";
import { getUsers } from "../../../../apiUsers";

import type { Users } from "../../../../apiUsers";

interface LoggedUser {
  id: string;
  email: string;
  serial_id: number;
  name: string;
  phone_number?: string;
  address?: number;
  img?: string;
}

export default async function Users() {
  const users = await getUsers();
  console.log(users, "users");
  // TODO FIX TYPE
  return (
    <div className="w-full lg:min-h-screen dark:bg-[#e5e5e5] mt-12 flex flex-col items-center justify-center mb-16">
      <div className="overflow-x-auto w-4/5">
        <table className="min-w-full border-2 border-gray-300 dark:bg-[#1d273d] rounded-lg shadow-lg mt-8 mb-8">
          <thead>
            <tr className="bg-gray-300 dark:bg-gray-700">
              <th className="py-4 px-6 text-lg text-gray-800 dark:text-white">
                Name
              </th>
              <th className="py-4 px-6 text-lg text-gray-800 dark:text-white">
                Email
              </th>
              <th className="py-4 px-6 text-lg text-gray-800 dark:text-white">
                Phone
              </th>
              <th className="py-4 px-6 text-lg text-gray-800 dark:text-white">
                Address
              </th>
              <th className="py-4 px-6 text-lg text-gray-800 dark:text-white">
                Avatar
              </th>
              <th className="py-4 px-6 text-lg text-gray-800 dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-300 dark:border-gray-600"
              >
                <td className="pl-8 py-4 text-lg text-gray-800 dark:text-gray-200">
                  {user.name}
                </td>
                <td className="pl-8 py-4 text-lg text-gray-800 dark:text-gray-200">
                  {user.email}
                </td>
                <td className="pl-8 py-4 text-lg text-gray-800 dark:text-gray-200">
                  {user.phone_number || "N/A"}
                </td>
                <td className="pl-8 py-4 text-lg text-gray-800 dark:text-gray-200">
                  {user.address || "N/A"}
                </td>
                <td className="pl-8 py-4 text-lg text-gray-800 dark:text-gray-200">
                  {user.img ? (
                    <Image
                      width={50}
                      height={50}
                      src={user.img}
                      alt="avatar"
                      className="rounded-full"
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="py-4 flex items-center justify-center gap-4">
                  <UserIcons users={user} id={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
