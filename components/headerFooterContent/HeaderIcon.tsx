import { NavigationProps } from "@/app/interface";
import { iconData } from "../projectData";
import Link from "next/link";

const HeaderIcon = ({ alingItems }: NavigationProps) => {
  return (
    <div style={{ alignItems: alingItems }} className="hidden lg:flex">
      {iconData.map((item) => (
        <div key={item.id} style={{ display: "flex", alingItems: "center" }}>
          <Link href="#">{item.icon}</Link>
        </div>
      ))}
    </div>
  );
};

export { HeaderIcon };

//TOD fix this shit
