"use client";

import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handlerLoginUser } from "../../helper/userLogin";
import { LangButton } from "../headerFooterContent/LangButton";

const UserAuthorization = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // prevent default submisison and setting input values redirecting into main page
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlerLoginUser(userName, password).then(() => {
      router.push("/");
    });
  };

  return (
    <>
      <LangButton marginBottom="20px" />
      <p className="animate-pulse  text-[20px] mb-4 font-semibold text-[#0C1B31] dark:text-[#949E9E]  tracking-wide ">
        Access restricted. Please log in to proceed !
      </p>
      <form
        onSubmit={handleSubmit}
        className="py-[40px] px-[20px] border-2 border-[#0C1B31] dark:border-[#939898] bg-[#979f9f] bg-opacity-5 flex items-center flex-col rounded-md"
      >
        <FaCircleUser className="w-[60px] h-[60px] m-[15px] text-[#3AA2A2]" />
        <label className="flex flex-col items-center">
          <input
            className=" w-[250px]  py-[15px] px-[10px] rounded-md text-[#3AA2A2] font-lg mb-[10px] outline-none"
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          ></input>
        </label>
        <label className="flex flex-col items-center">
          <input
            type="password"
            className="w-[250px] py-[15px] px-[10px] rounded-md text-[#3AA2A2] font-lg mb-[10px] outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <button
          className="w-full h-[40px] p-[10px] text-[#393a3a] bg-[#3AA2A2] mt-[10px] rounded-md text-lg text-center cursor-pointer font-bold flex items-center justify-center"
          type="submit"
        >
          Log In
        </button>
      </form>
    </>
  );
};

export { UserAuthorization };
