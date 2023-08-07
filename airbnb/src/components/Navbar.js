import airbnb_logo from "../images/airbnb-logo.png"

function Navbar() {
  return (
    <nav>
      <img src={airbnb_logo} alt="airbnb logo" className="nav--logo"/>
    </nav>
  )
}

export default Navbar
