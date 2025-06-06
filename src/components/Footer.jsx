export default function Footer () {
  return(
        <>
        <hr className="large_hr"/>
        <section className="footer_function">
            <div className="footer_link">
                <h5>Shopping</h5>
                <p className="footer_p">Track My Order</p>
                <p className="footer_p">Payment Options</p>
                <p className="footer_p">Points + Pay</p>
                <p className="footer_p">Delivery/Click & Collect</p>
                <p className="footer_p">Returns & Exchanges</p>
                <p className="footer_p">Ture Fit</p>
                <p className="footer_p">Catalogues</p>
            </div>
            <div className="footer_link">
                <h5>Customer Service</h5>
                <p className="footer_p">FAQs</p>
                <p className="footer_p">Contact us</p>
                <p className="footer_p">Store Locator</p>
                <p className="footer_p">Experiences&Services</p>
                <p className="footer_p">Gift Registry</p>
                <p className="footer_p">Notices&Recalls</p>
                <p className="footer_p">Accessibility</p>
            </div>
            <div className="footer_link">
                <h5>More from Myer</h5>
                <p className="footer_p">MYER one</p>
                <p className="footer_p">Myer Gift Cards</p>
                <p className="footer_p">Careers</p>
                <p className="footer_p">About us</p>
                <p className="footer_p">Investors&Media</p>
                <p className="footer_p">Sustainability</p>
                <p className="footer_p">Sell On Myer</p>
            </div>

            <div className="footer_link">
                <h5>MYER one App</h5>
                <p className="download_p">Download Today</p>
                <p className="download_p">One-touch access to your<br /> Member Card and redeem <br />Rewards directly from the
                    App </p>
                <img className="down_img" src="/img/android.jpeg" alt="Android"/>
                <img className="down_img" src="/img/ios.jpeg" alt="ios"/>
            </div>
        </section>
        
        <div className="footer_bottom">
            <div className="footer_mid">
                <p className="footer_p">Returns policy</p>
                <p className="footer_p">Competitive pricing policy</p>
                <p className="footer_p">Online shopping T&Cs</p>
                <p className="footer_p">Terms and conditions</p>
                <p className="footer_p">MYER one T&Cs</p>
                <p className="footer_p">Privacy policy</p>
                <p className="footer_p">Team member</p>
            </div>
            <img className="footer_img" src="/img/footer.png" alt="footer"/>
        </div>

    </>
  );
}