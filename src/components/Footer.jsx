const Footer = () => {
  return (
    <footer>
      <div className="container-f">
        <div className="row">
          <div className="col">
            <img className="fontImg" src="./img/buy-comics-digital-comics.png" alt="" />
            <span className="fontText">DIGITAL COMICS</span>
          </div>
          <div className="col">
            <img className="fontImg" src="./img/buy-comics-merchandise.png" alt="" />
            <span className="fontText">DC MERCHANDISE</span>
          </div>
          <div className="col">
            <img className="fontImg" src="./img/buy-comics-subscriptions.png" alt="" />
            <span className="fontText">SUBSCRIPTION</span>
          </div>
          <div className="col">
            <img className="fontImg2" src="./img/buy-comics-shop-locator.png" alt="" />
            <span className="fontText">COMIC SHOP LOCATOR</span>
          </div>
          <div className="col">
            <img className="fontImg" src="./img/buy-dc-power-visa.svg" alt="" />
            <span className="fontText">DC POWER VISA</span>
          </div>
        </div>
        <div className="row2">
          <div className="col pl-200">
            <h2>DC COMICS</h2>
            <ul>
              <li>Character</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
            <h2>SHOP</h2>
            <ul>
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </ul>
          </div>
          <div className="col pl-20">
            <h2>DC</h2>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy policy(New)</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshop</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col pl-20">
            <h2>SITES</h2>
            <ul>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>
          <div className="col-40">
            <img src="./img/dc-logo-bg.png" alt="" />
          </div>
        </div>
        <div className="row3">
          <button type="button" className="button">SIGN-UP NOW!</button>
          <div>
            <h3 className="pb-10">FOLLOW US</h3>
            <img className="pl-5" src="img/footer-facebook.png" alt="" />
            <img className="pl-5" src="img/footer-twitter.png" alt="" />
            <img className="pl-5" src="img/footer-youtube.png" alt="" />
            <img className="pl-5" src="img/footer-pinterest.png" alt="" />
            <img className="pl-5" src="img/footer-periscope.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
