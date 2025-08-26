const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="col-25 p-10">
            <img src="./img/dc-logo.png" alt="" />
          </div>
          <div className="col-75 pt-40">
            <ul>
              <li><a href="#">CHARACTERS</a></li>
              <li><a className="active" href="#">COMICS</a></li>
              <li><a href="#">MOVIES</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">GAMES</a></li>
              <li><a href="#">COLLECTIBLES</a></li>
              <li><a href="#">VIDEOS</a></li>
              <li><a href="#">FANS</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">SHOP</a></li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
