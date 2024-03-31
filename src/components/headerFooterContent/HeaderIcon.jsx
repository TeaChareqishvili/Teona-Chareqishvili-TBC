import { iconData } from "../projectData";
import { NavLink } from "react-router-dom";

const HeaderIcon = ({ color, marginRight, alignItmes }) => {
  return (
    <div style={{ alignItems: alignItmes }} className="icon-wrapper">
      {iconData.map((item) => (
        <div key={item.id}>
          <NavLink
            to={item.title}
            style={{
              color: color,
              marginRight: marginRight,
            }}
          >
            {item.icon}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export { HeaderIcon };
