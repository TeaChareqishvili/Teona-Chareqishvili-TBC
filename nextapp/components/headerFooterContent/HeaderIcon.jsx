import { iconData } from "../projectData";
import Link from "next/link";

const HeaderIcon = ({ color, marginRight, alignItmes }) => {
  return (
    <div style={{ alignItems: alignItmes }} className="icon-wrapper">
      {iconData.map((item) => (
        <div key={item.id}>
          <Link
            href={item.title}
            style={{
              color: color,
              marginRight: marginRight,
            }}
          >
            {item.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export { HeaderIcon };
