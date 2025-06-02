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
    <nav>
      <div className="navigation">
        {NavItems.map((item, index) => (
          <button key={index} type="button">
            <strong>{item}</strong>
            <img src="//img/arrow.png" alt="arrow" />
          </button>
        ))}
      </div>
    </nav>
  );
}
