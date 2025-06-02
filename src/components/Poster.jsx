export default function Poster() {
    return (
        <>
        <section className="poster">
            <div className="left_poster">
                <button type="button">
                    <img class="left_poster_img" src="/img/sales.png" alt="sales"/>
                </button>
                <button className="poster_button" type="button">
                    <h2 className="poster_button_h2">Huge Savings On Women's, Men's, Home, Kids & More</h2>
                </button>
            </div>
            <div className="right_poster_box">
                <div className="right_poster">
                    <button type="button">
                        <img className="right_poster_img" src="/img/woman.png" alt="woman"/>
                    </button>
                    <button className="poster_button" type="button">
                        <h2 className="poster_button_h2">20-40% OFF</h2>
                        <p>Women's fashion by Basque, Regatta, Levi's, Witchery and more</p>
                    </button>
                </div>
                <div className="right_poster">
                    <button type="button">
                        <img className="right_poster_img" src="/img/coffee.png" alt="coffee"/></button>
                    <button className="poster_button" type="button">
                        <h2 className="poster_button_h2">UP TO 25% OFF</h2>
                        <p>The original price of appliances by Nespresso, Tefal, Philips and more</p>
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}