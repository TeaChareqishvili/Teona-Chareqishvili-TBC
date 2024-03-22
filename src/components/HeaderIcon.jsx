import { iconData } from "./projectData";
import { Link } from "react-router-dom";

const HeaderIcon = ({ color, marginRight, alignItmes }) => {
  return (
    <div style={{ alignItems: alignItmes }} className="icon-wrapper">
      {iconData.map((item) => (
        <div key={item.id}>
          <Link
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
