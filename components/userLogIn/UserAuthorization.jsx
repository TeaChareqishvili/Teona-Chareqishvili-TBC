"use client";

import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";

const UserAuthorization = ({ handleLogIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // preventind default submisison and setting input values
  const handleSubmit = (e) => {
    if (!userName.trim() || !password.trim()) {
      alert("Both username and password are required.");
    }
    handleLogIn(userName, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="log-in-form">
        <FaCircleUser className="user-log" />
        <label>
          <input
            className="log-in-input"
            type="text"
            placeholder="User name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </label>
        <label>
          <input
            type="password"
            className="log-in-input"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button className="log-in-btn" type="submit">
          Log In
        </button>
      </form>
    </>
  );
};

export { UserAuthorization };
