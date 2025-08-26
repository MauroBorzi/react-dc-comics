import NavBar from "./NavBar"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="col-25 p-10">
            <img src="./img/dc-logo.png" alt="" />
          </div>
          <NavBar />
        </div>

      </div>
    </header>
  )
}

export default Header
