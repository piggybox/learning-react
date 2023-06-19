import "./App.css"

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo192.png" className="nav-logo" alt="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li> 
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer"> 2021. All rights reserved</footer>
  )
}

function Body() {
  return (
    <body>
      <h1>Reasons I'm excited to learn React</h1>
      <ul>
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's hirable skills</li>
        <li>It's actively maintained by skilled people</li>
      </ul>
    </body>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
