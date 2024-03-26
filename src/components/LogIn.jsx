import { FaCircleUser } from "react-icons/fa6";
import { logIn } from "./projectData";

const LogIn = () => {
  const user = Object.entries(logIn).reduce((acc, [key, value]) => {
    acc.push(
      <label key={key}>
        <input
          className="log-in-input"
          value={value}
          readOnly
          type={key === "email" ? "email" : "text"}
          placeholder={
            key === "password"
              ? "New Password"
              : key === "confirm"
              ? "Confirm New Password"
              : ""
          }
        />
      </label>
    );
    return acc;
  }, []);

  return (
    <div className="log-in-wrapper">
      <form className="log-in-form">
        <FaCircleUser className="user-log" />
        {user}
        <button className="log-in-btn">Save</button>
      </form>
    </div>
  );
};

export { LogIn };
