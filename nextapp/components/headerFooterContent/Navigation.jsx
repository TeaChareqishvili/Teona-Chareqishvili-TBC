import { navList } from "../projectData";
import Link from "next/link";

const Navigation = ({
  flexDirection,
  alingItems,
  marginBottom,
  marginLeft,
  display,
  color,
  fontSize,
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
          <Link
            href={item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`}
            className="li-nav"
            style={{
              marginBottom: marginBottom,
              marginLeft: marginLeft,
              color: color,
            }}
          >
            <li style={{ fontSize: fontSize }}>{item.title}</li>
          </Link>
        </ul>
      ))}
    </nav>
  );
};

export { Navigation };
