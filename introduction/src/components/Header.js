import reactLogo from "../images/logo192.png"
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={reactLogo} className="nav-logo" alt="logo" />
        <h3>React Facts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  )
}

export default Header
