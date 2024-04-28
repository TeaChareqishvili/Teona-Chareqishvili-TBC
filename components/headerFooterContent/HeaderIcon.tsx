import { NavigationProps } from "@/app/interface";
import { iconData } from "../projectData";
import Link from "next/link";

const HeaderIcon: React.FC<NavigationProps> = ({ alignItems }) => {
  return (
    <div style={{ alignItems: alignItems }} className="hidden lg:flex">
      {iconData.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
          <Link href="#">{item.icon}</Link>
        </div>
      ))}
    </div>
  );
};

export { HeaderIcon };
