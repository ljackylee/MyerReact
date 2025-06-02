export default function FunctionBar() {
  return (
    <>
      {/* normal screen function bar */}
      <section className="function_bar">
        <div>
          <button type="button">
            <img id="logo" src="/img/logo.jpg" alt="Myer logo" />
          </button>
        </div>
        <div>
          <form className="search_bar">
            <input
              className="search_bar_input"
              type="text"
              id="search"
              name="search"
              placeholder="Search for a product or brand"
            />
            <button type="submit">
              <img class="search_icon" src="/img/search.png" alt="search" />
            </button>
          </form>
        </div>
        <div>
          <button type="button">
            <img src="/img/sign.png" alt="sign" />
            <p className="function_bar_p">Sign in / Join</p>
          </button>
          <button type="button">
            <img src="/img/favourite.png" alt="favourite" />
          </button>
          <button type="button">
            <img src="/img/cart.png" alt="cart" />
          </button>
        </div>
      </section>

      {/* small screen function bar */}
      <section className="function_bar_small">
        <div>
          <img src="/img/nav.png" alt="small screen nav" />
        </div>
        <div>
          <form className="search_bar_small">
            <input
              className="input_bar_small"
              type="text"
              id="search"
              name="search"
              placeholder="Search for a product or brand"
            />
            <button type="submit">
              <img className="search_icon" src="/img/search.png" alt="search" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
