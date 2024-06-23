"use client";
import Link from "next/link";
import { MdAdminPanelSettings } from "react-icons/md";

const panel: AdminPanel[] = [
  {
    id: 1,
    title: "Products",
    path: "/adminProducts",
  },
  {
    id: 2,
    title: "Blogs",
    path: "/adminBlogs",
  },
  {
    id: 3,
    title: "Orders",
    path: "/orders",
  },
  {
    id: 4,
    title: "Users",
    path: "/users",
  },
  {
    id: 5,
    title: "User's Messages",
    path: "/userMessages",
  },
];

interface AdminPanel {
  id: number;
  title: string;
  path: string;
}

export default function AdminPageLyout() {
  return (
    <div className="w-full h-screen bg-[#D3D4D9] dark:bg-[#010101]  mt-[50px] px-[30px] py-[40px] flex items-center justify-around flex-wrap mb-[30px]">
      {panel.map((item, id) => (
        <div
          key={id}
          className="dark:bg-[#212121] bg-[#2E3944] mt-[40px] bt-[60px] cursor-pointer rounded-md shadow-lg flex flex-col items-center justify-center px-[20px] py-[30px] w-[350px] h-[250px] hover:scale-110 hover:dark:bg-[#333333] transition-all duration-200"
        >
          <MdAdminPanelSettings className="admin-icon" />
          <h4 className="text-[white] text-[24px] mb-[15px] tracking-wide text-center">
            {item.title}
          </h4>
          <Link
            className="text-[white] font-bold cursor-pointer text-[18px] hover:text-[#c2c5aa] hover:tracking-widest  transition-all duration-150"
            href={item.path}
          >
            OPEN
          </Link>
        </div>
      ))}
    </div>
  );
}
