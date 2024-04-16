"use client";

import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";

const UserLog = ({ handleLogIn }) => {
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <>
      <form className="log-in-form">
        <FaCircleUser className="user-log" />
        <label>
          <input
            className="log-in-input"
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          <input
            type="password"
            className="log-in-input"
            placeholder="Password..."
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          ></input>
        </label>
        <button
          className="log-in-btn"
          type="submit"
          onClick={() => handleLogIn(email, password)}
        >
          Log In
        </button>
      </form>
    </>
  );
};

export { UserLog };
