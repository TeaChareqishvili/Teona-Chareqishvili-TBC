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
    <nav style={{ display: display }}>
      {navList.map((item) => (
        <ul
          key={item.id}
          className="flex items-center"
          style={{
            flexDirection: flexDirection,
            alignItems: alingItems,
          }}
        >
          <Link
            href={item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`}
            className="text-sm md:text-base lg:text-lg xl:text-xl  text-gray-700 font-bold uppercase cursor-pointer transition duration-500 transform hover:text-red-600 hover:scale-105"
            style={{
              marginBottom: marginBottom,
              marginLeft: marginLeft,
              color: color,
            }}
          >
            <li
              className="font-tbc-helvetica-bold"
              style={{ fontSize: fontSize }}
            >
              {item.title}
            </li>
          </Link>
        </ul>
      ))}
    </nav>
  );
};

export { Navigation };
