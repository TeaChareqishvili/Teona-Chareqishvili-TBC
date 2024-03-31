import { navList } from "../projectData";
import { NavLink } from "react-router-dom";

const Navigation = ({
  flexDirection,
  alingItems,
  marginBottom,
  marginLeft,
  display,
  color,
}) => {
  return (
    <nav className="navigation" style={{ display: display }}>
      {navList.map((item) => (
        <ul
          key={item.id}
          className="ul-nav"
          style={{
            flexDirection: flexDirection,
            alignItems: alingItems,
          }}
        >
          <NavLink
            className="li-nav"
            style={{
              marginBottom: marginBottom,
              marginLeft: marginLeft,
              color: color,
            }}
            to={item.title === "Home" ? "/" : `/${item.title}`}
          >
            {" "}
            <li>{item.title}</li>
          </NavLink>
        </ul>
      ))}
    </nav>
  );
};

export { Navigation };
