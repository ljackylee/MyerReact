export default function TopBar() {
    return (
      <section className="top_bar">
        <div>
          <button className="top_bar_button" type="button">
            <img src="/img/Top1.png" alt="top1" />
            Free Delivery Over $99 *
          </button>
        </div>
        <div>
          <button className="top_bar_button" type="button">
            <img src="/img/Top2.png" alt="top2" />
            Free Click & Collect
          </button>
        </div>
        <div>
          <button className="top_bar_button" type="button">
            <img src="/img/Top3.png" alt="top3" />
            30 Day Returns
          </button>
        </div>
      </section>
    );
}