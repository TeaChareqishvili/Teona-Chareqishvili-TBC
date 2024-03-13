const HeaderNavigation = ({
  flexDirection,
  alingItems,
  marginBottom,
  marginLeft,
  display,
}) => {
  const navList = [
    {
      id: 1,
      title: "მთავარი",
    },
    {
      id: 2,
      title: "ჩვენ შესახებ",
    },
    {
      id: 3,
      title: "სიახლეები",
    },
    {
      id: 4,
      title: "კონტაქტი",
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
