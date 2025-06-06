const NavItems = [
  "Women",
  "Men",
  "Beauty",
  "Home",
  "Travel & Tech",
  "Kids",
  "Toys",
  "Gifts",
  "Sale",
  "Clearance",
  "Myer one",
];

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation_ul">
        {NavItems.map((item, index) => (
          <li>
            <button key={index} type="button">
              <strong>{item}</strong>
              <img src="/img/arrow.png" alt="arrow" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
