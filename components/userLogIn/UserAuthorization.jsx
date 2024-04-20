"use client";

import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";

const UserAuthorization = ({ handleLogIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // preventind default submisison and setting input values
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn(userName, password);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-[40px] px-[20px] border-2 border-[#939898] bg-[#979f9f] bg-opacity-5 flex items-center flex-col rounded-md"
      >
        <FaCircleUser className="w-[60px] h-[60px] m-[15px] text-[#3AA2A2]" />
        <label className="flex flex-col items-center">
          <input
            className=" w-[250px]  py-[15px] px-[10px] rounded-md text-[#3AA2A2] font-lg mb-[10px] outline-none"
            type="text"
            placeholder="User name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          ></input>
        </label>
        <label className="flex flex-col items-center">
          <input
            type="password"
            className="w-[250px] py-[15px] px-[10px] rounded-md text-[#3AA2A2] font-lg mb-[10px] outline-none"
            placeholder="Password..."
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
