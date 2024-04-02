import { iconData } from "../projectData";
// import { NavLink } from "react-router-dom";

const HeaderIcon = () => {
  return (
    <div className="icon-wrapper">
      {iconData.map((item) => (
        <div key={item.id}>
          {/* <NavLink
            to={item.title} */}
          {/* style={{
              color: color,
              marginRight: marginRight,
            }}
          > */}
          {item.icon}
          {/* </NavLink> */}
        </div>
      ))}
    </div>
  );
};

export { HeaderIcon };

// { color, marginRight, alignItmes }
