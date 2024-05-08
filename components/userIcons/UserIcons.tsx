import { IoPersonAdd } from "react-icons/io5";
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";

const UserIcons = () => {
  return (
    <div className="flex items-center justify-center">
      <IoPersonAdd className="user-icon" />
      <TiUserDelete className="user-icon" />
      <FaUserEdit className="user-icon" />
    </div>
  );
};

export { UserIcons };
