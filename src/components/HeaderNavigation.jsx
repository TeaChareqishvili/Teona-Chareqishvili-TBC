const HeaderNavigation = ({
  flexDirection,
  alingItems,
  marginBottom,
  marginLeft,
  display,
  color,
}) => {
  const navList = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Shop",
    },
    {
      id: 3,
      title: "Blog",
    },
    {
      id: 4,
      title: "About",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];

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

export { HeaderNavigation };
