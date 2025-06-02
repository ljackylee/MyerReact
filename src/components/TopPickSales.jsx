export default function TopPickSales () {
    return(
        <section className="top_pick_sales">
            <h2 className="top_pick_title">Top Sale Picks For You</h2>
            <div className="top_pick_container">
                <button>
                    <img src="/img/left-arrow.png" alt="left-arrow"/>
                </button>
                <section className="top_pick_list">
                    <div className="top_pick_item">
                        <img className="top_pick_img" src="/img/item1.png" alt="item1"/>
                            <h3 className="top_pick_h3"><strong>Champion</strong> Slim Leg Cuff Pant in Black</h3>
                            <del>$64.99</del>
                            <p className="top_pick_p"> $45.49</p>
                    </div>
                    <div className="top_pick_item">
                        <img className="top_pick_img" src="/img/item2.png" alt="item2"/>
                            <h3 className="top_pick_h3"><strong>Champion</strong> Slim Leg Cuff Pant in Grey</h3>
                            <del>$64.99</del>
                            <p className="top_pick_p"> $45.49</p>
                    </div>
                    <div className="top_pick_item">
                        <img className="top_pick_img" src="/img/item3.png" alt="item3"/>
                            <h3 className="top_pick_h3"><strong>Adidas</strong> Essentials Feelcozy Fleece Joggers in Grey
                            </h3>
                            <del>$60.00</del>
                            <p className="top_pick_p"> $42.00</p>
                    </div>
                    <div className="top_pick_item">
                        <img className="top_pick_img" src="/img/item4.png" alt="item4"/>
                            <h3 className="top_pick_h3"><strong>Champion</strong> Reverse Weave Relaxed Joggers in Emerald
                                Allure</h3>
                            <del>$89.99</del>
                            <p className="top_pick_p"> $62.99</p>
                    </div>
                    <div className="top_pick_item">
                        <img className="top_pick_img" src="/img/item5.png" alt="item5"/>
                            <h3 className="top_pick_h3"><strong>Puma</strong> Essentials No. 1 Logo Sweatpants in Black</h3>
                            <del>$80.00</del>
                            <p className="top_pick_p"> $56</p>
                    </div>
                    <div className="top_pick_item">
                        <img className="top_pick_img" src="/img/item6.png" alt="item6"/>
                            <h3 className="top_pick_h3"><strong>Champion</strong> Legacy Puff Script Cuff Pant in Stealth
                            </h3>
                            <del>$64.99</del>
                            <p className="top_pick_p"> $45.49</p>
                    </div>
                </section>
                <button>
                    <img src="/img/right-arrow.png" alt="right-arrow"/>
                </button>
            </div>
            <div className="top_pick_bottom">
                <div>
                    <img className="top_pick_more" src="/img/more.png" alt="more"/>
                    <img className="top_pick_more" src="/img/more.png" alt="more"/>
                </div>
            </div>
        </section>
    )
}