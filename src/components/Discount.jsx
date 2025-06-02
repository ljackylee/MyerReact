const DiscountItems = [
  "30% OFF WOMEN'S SWIMWEAR",
  "30-40% OFF MEN'S CASUAL CLOTHING",
  "30% OFF SELECTED KID'S CLOTHING",
  "UP TO 25% OFF APPLIANCES",
];

export default function Discount() {
  return (
    <section className="discount">
      {DiscountItems.map((item, index) => (
        <div key={index} className="discount_item">
          <button type="button">
            <strong>{item}</strong>
          </button>
        </div>
      ))}
    </section>
  );
}
