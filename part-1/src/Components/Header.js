
import reactLogo from "../images/logo192.png"
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={reactLogo} className="nav-logo" alt="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
