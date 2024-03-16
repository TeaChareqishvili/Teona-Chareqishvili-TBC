import { navList } from "./projectData";

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
          <li
            className="li-nav"
            style={{
              marginBottom: marginBottom,
              marginLeft: marginLeft,
              color: color,
            }}
          >
            {item.title}
          </li>
        </ul>
      ))}
    </nav>
  );
};

export { Navigation };
