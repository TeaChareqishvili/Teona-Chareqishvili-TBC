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
            className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#111827] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#70cbcb] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#70cbcb]"
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
