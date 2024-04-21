import { iconData } from "../projectData";
import Link from "next/link";

const HeaderIcon = ({ alignItmes }) => {
  return (
    <div style={{ alignItems: alignItmes }} className="hidden lg:flex">
      {iconData.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
          <Link href="#">{item.icon}</Link>
        </div>
      ))}
    </div>
  );
};

export { HeaderIcon };
